import { strings } from "../../../strings/Strings";
import { signupCases } from "../../config/cases/Cases";
import { signupQuery } from "../query/signupQuery";
import { capitalizeFirst } from "../../../util/Util";

export const signupUser = (name, email, confirmEmail, password) => {
  return async (dispatch, getState) => {
    dispatch({ type: signupCases.LOADING, payload: true });
    const bodyRequest = signupQuery(name, email, confirmEmail, password);
    try {
      const response = await fetch(strings.path.SERVER_REQUEST, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bodyRequest),
      });
      const responseData = await response.json();
      const { errors, data } = responseData;
      if (data) {
        dispatch({
          type: signupCases.USER_SIGNEDUP,
          payload: data.signUp.email,
        });
      } else if (errors) {
        dispatch({ type: signupCases.ERROR, payload: errors[0].message });
      }
    } catch (err) {
      if (err)
        dispatch({
          type: signupCases.ERROR,
          payload: capitalizeFirst(strings.error.FETCH_ERROR),
        });
    }
  };
};

export const clearSignUpState = () => {
  return (dispatch, getState) => {
    dispatch({ type: signupCases.CLEAR_STATE });
  };
};
