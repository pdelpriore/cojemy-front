import { loginCases } from "../../config/cases/Cases";
import { loginQuery } from "../query/loginQuery";
import { strings } from "../../../strings/Strings";

export const loginUser = (email, password) => {
  return async (dispatch, getState) => {
    dispatch({ type: loginCases.LOADING, payload: true });
    const bodyRequest = loginQuery(email, password);
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
        dispatch({ type: loginCases.USER_DATA, payload: data.login });
      } else if (errors) {
        dispatch({ type: loginCases.ERROR, payload: errors[0].message });
      }
    } catch (err) {
      if (err) console.log(err);
    }
  };
};

export const clearLoginState = () => {
  return (dispatch, getState) => {
    dispatch({ type: loginCases.CLEAR_STATE });
  };
};
