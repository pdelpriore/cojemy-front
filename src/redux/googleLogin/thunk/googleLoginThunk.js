import { loginGoogleUserCases } from "../../config/cases/Cases";
import { googleLoginQuery } from "../query/googleLoginQuery";
import { strings } from "../../../strings/Strings";

export const loginUserGoogle = (email, token) => {
  return async (dispatch, getState) => {
    dispatch({ type: loginGoogleUserCases.LOADING, payload: true });
    const bodyRequest = googleLoginQuery(email);
    try {
      const response = await fetch(strings.path.SERVER_REQUEST, {
        method: "post",
        headers: {
          "x-auth": token,
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(bodyRequest),
      });
      const responseData = await response.json();
      const { errors, data } = responseData;
      if (data) {
        dispatch({
          type: loginGoogleUserCases.GOOGLE_USER_DATA,
          payload: data.loginGoogleUser,
        });
      } else if (errors) {
        dispatch({
          type: loginGoogleUserCases.GOOGLE_USER_ERROR,
          payload: errors[0].message,
        });
      }
    } catch (err) {
      if (err) console.log(err);
    }
  };
};

export const clearGoogleLoginState = () => {
  return (dispatch, getState) => {
    dispatch({ type: loginGoogleUserCases.CLEAR_STATE });
  };
};
