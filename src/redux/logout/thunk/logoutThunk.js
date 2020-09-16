import { logoutCases } from "../../config/cases/Cases";
import { logoutQuery } from "../query/logoutQuery";
import { strings } from "../../../strings/Strings";
import { capitalizeFirst } from "../../../util/Util";

export const logoutUser = (userId, email) => {
  return async (dispatch, getState) => {
    dispatch({ type: logoutCases.LOADING, payload: true });
    const bodyRequest = logoutQuery(userId, email);
    try {
      const response = await fetch(strings.path.SERVER_REQUEST, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "same-origin",
        body: JSON.stringify(bodyRequest),
      });
      const responseData = await response.json();
      const { data } = responseData;
      if (data.logout) {
        dispatch({ type: logoutCases.SIGNOUT, payload: data.logout });
      }
    } catch (err) {
      if (err)
        dispatch({
          type: logoutCases.ERROR,
          payload: capitalizeFirst(strings.error.FETCH_ERROR),
        });
    }
  };
};

export const clearLogoutState = () => {
  return (dispatch, getState) => {
    dispatch({ type: logoutCases.CLEAR_STATE });
  };
};
