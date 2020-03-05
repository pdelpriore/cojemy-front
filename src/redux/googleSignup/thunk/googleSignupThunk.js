import { signupGoogleUserCases } from "../../config/cases/Cases";
import { googleSignupQuery } from "../query/googleSignupQuery";
import { strings } from "../../../strings/Strings";

export const signupGoogleUser = (name, email, photo) => {
  return async (dispatch, getState) => {
    dispatch({ type: signupGoogleUserCases.LOADING, payload: true });
    const bodyRequest = googleSignupQuery(name, email, photo);
    try {
      const response = await fetch(strings.path.SERVER_REQUEST, {
        method: "post",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(bodyRequest)
      });
      const responseData = await response.json();
      const { errors, data } = responseData;
      if (data) {
        dispatch({
          type: signupGoogleUserCases.USER_GOOGLE_SIGNEDUP,
          payload: data.signUpGoogleUser.email
        });
      } else if (errors) {
        dispatch({
          type: signupGoogleUserCases.ERROR,
          payload: errors[0].message
        });
      }
    } catch (err) {
      if (err) console.log(err);
    }
  };
};

export const clearSignUpGoogleUserState = () => {
  return (dispatch, getState) => {
    dispatch({ type: signupGoogleUserCases.CLEAR_STATE });
  };
};
