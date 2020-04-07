import { googleLogoutCases } from "../../config/cases/Cases";
import { googleLogoutQuery } from "../query/googleLogoutQuery";
import { strings } from "../../../strings/Strings";

export const logoutGoogleUser = (email) => {
  return async (dispatch, getState) => {
    dispatch({ type: googleLogoutCases.LOADING, payload: true });
    const bodyRequest = googleLogoutQuery(email);
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
      if (data.logoutGoogleUser) {
        dispatch({
          type: googleLogoutCases.SIGNOUT,
          payload: data.logoutGoogleUser,
        });
      }
    } catch (err) {
      if (err) console.log(err);
    }
  };
};

export const clearGoogleLogoutState = () => {
  return (dispatch, getState) => {
    dispatch({ type: googleLogoutCases.CLEAR_STATE });
  };
};
