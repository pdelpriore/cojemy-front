import { removeAccountCases } from "../../../config/cases/Cases";
import { removeAccountQuery } from "../query/removeAccountQuery";
import { strings } from "../../../../strings/Strings";
import { capitalizeFirst } from "../../../../util/Util";

export const removeAccount = (userId, email) => {
  return async (dispatch, getState) => {
    dispatch({ type: removeAccountCases.LOADING, payload: true });
    const bodyRequest = removeAccountQuery(userId, email);
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
      if (err)
        dispatch({
          type: removeAccountCases.ERROR,
          payload: capitalizeFirst(strings.error.FETCH_ERROR),
        });
    }
  };
};

export const removeAccountClearState = () => {
  return (dispatch, getState) => {
    dispatch({ type: removeAccountCases.CLEAR_STATE });
  };
};
