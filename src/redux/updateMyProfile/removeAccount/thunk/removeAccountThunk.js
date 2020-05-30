import { removeAccountCases } from "../../../config/cases/Cases";
import { removeAccountQuery } from "../query/removeAccountQuery";
import { strings } from "../../../../strings/Strings";

export const removeAccount = (email) => {
  return async (dispatch, getState) => {
    dispatch({ type: removeAccountCases.LOADING, payload: true });
    const bodyRequest = removeAccountQuery(email);
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
      if (data.removeAccount !== null) {
        dispatch({
          type: removeAccountCases.ACCOUNT_REMOVED,
          payload: data.removeAccount,
        });
      }
    } catch (err) {
      if (err) console.log(err);
    }
  };
};

export const removeAccountClearState = () => {
  return (dispatch, getState) => {
    dispatch({ type: removeAccountCases.CLEAR_STATE });
  };
};
