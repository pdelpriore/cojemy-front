import { changePasswordCases } from "../../../config/cases/Cases";
import { changePasswordQuery } from "../query/changePasswordQuery";
import { strings } from "../../../../strings/Strings";
import { capitalizeFirst } from "../../../../util/Util";

export const changeUserPassword = (
  currentPass,
  newPass,
  confirmPass,
  userId,
  email
) => {
  return async (dispatch, getState) => {
    dispatch({ type: changePasswordCases.LOADING, payload: true });
    const bodyRequest = changePasswordQuery(
      currentPass,
      newPass,
      confirmPass,
      userId,
      email
    );
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
      const { errors, data } = responseData;
      if (data.changeUserPassword !== null) {
        dispatch({
          type: changePasswordCases.PASSWORD_CHANGED,
          payload: data.changeUserPassword,
        });
      } else if (errors) {
        dispatch({
          type: changePasswordCases.ERROR,
          payload: errors[0].message,
        });
      }
    } catch (err) {
      if (err)
        dispatch({
          type: changePasswordCases.ERROR,
          payload: capitalizeFirst(strings.error.FETCH_ERROR),
        });
    }
  };
};

export const changeUserPasswordClearState = () => {
  return (dispatch, getState) => {
    dispatch({ type: changePasswordCases.CLEAR_STATE });
  };
};
