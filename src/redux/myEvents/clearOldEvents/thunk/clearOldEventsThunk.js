import { clearOldEventsCases } from "../../../config/cases/Cases";
import { clearOldEventsQuery } from "../query/clearOldEventsQuery";
import { strings } from "../../../../strings/Strings";
import { capitalizeFirst } from "../../../../util/Util";

export const clearOldEvents = (userId, email) => {
  return async (dispatch, getState) => {
    dispatch({ type: clearOldEventsCases.LOADING, payload: true });
    const bodyRequest = clearOldEventsQuery(userId, email);
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
      if (data.clearOldEvents !== null) {
        dispatch({
          type: clearOldEventsCases.OLD_EVENTS_CLEARED,
          payload: data.clearOldEvents,
        });
      }
    } catch (err) {
      if (err)
        dispatch({
          type: clearOldEventsCases.ERROR,
          payload: capitalizeFirst(strings.error.FETCH_ERROR),
        });
    }
  };
};

export const clearOldEventsClearState = () => {
  return (dispatch, getState) => {
    dispatch({ type: clearOldEventsCases.CLEAR_STATE });
  };
};
