import { changePasswordCases } from "../../../config/cases/Cases";
import { changePasswordQuery } from "../query/changePasswordQuery";
import { strings } from "../../../../strings/Strings";

export const changeUserPassword = (
  currentPass,
  newPass,
  confirmPass,
  email
) => {
  return async (dispatch, getState) => {
    dispatch({ type: changePasswordCases.LOADING, payload: true });
    const bodyRequest = changePasswordQuery(
      currentPass,
      newPass,
      confirmPass,
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
      if (err) console.log(err);
    }
  };
};

export const changeUserPasswordClearState = () => {
  return (dispatch, getState) => {
    dispatch({ type: changePasswordCases.CLEAR_STATE });
  };
};
