import { logoutCases } from "../../config/cases/Cases";
import { logoutQuery } from "../query/logoutQuery";
import { strings } from "../../../strings/Strings";

export const logoutUser = (email) => {
  return async (dispatch, getState) => {
    dispatch({ type: logoutCases.LOADING, payload: true });
    const bodyRequest = logoutQuery(email);
    try {
      const response = await fetch(strings.path.SERVER_REQUEST, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(bodyRequest),
      });
      const responseData = await response.json();
      const { data } = responseData;
      if (data.logout) {
        dispatch({ type: logoutCases.SIGNOUT, payload: data.logout });
      }
    } catch (err) {
      if (err) console.log(err);
    }
  };
};

export const clearLogoutState = () => {
  return (dispatch, getState) => {
    dispatch({ type: logoutCases.CLEAR_STATE });
  };
};
