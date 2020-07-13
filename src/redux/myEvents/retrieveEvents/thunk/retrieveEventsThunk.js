import { retrieveEventsCases } from "../../../config/cases/Cases";
import { retrieveEventsQuery } from "../query/retrieveEventsQuery";
import { searchEventsQuery } from "../query/searchEventsQuery";
import { strings } from "../../../../strings/Strings";
import { capitalizeFirst } from "../../../../util/Util";

export const getEvents = (category, userId, email) => {
  return async (dispatch, getState) => {
    dispatch({ type: retrieveEventsCases.LOADING, payload: true });
    const bodyRequest = retrieveEventsQuery(category, userId, email);
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
      if (data) {
        dispatch({
          type: retrieveEventsCases.EVENTS_RETRIEVED,
          payload: data.retrieveEvents,
        });
      } else if (errors) {
        dispatch({
          type: retrieveEventsCases.ERROR,
          payload: errors[0].message,
        });
      }
    } catch (err) {
      if (err)
        dispatch({
          type: retrieveEventsCases.ERROR,
          payload: capitalizeFirst(strings.error.FETCH_ERROR),
        });
    }
  };
};

export const searchEvents = (date, city, userId, email) => {
  return async (dispatch, getState) => {
    dispatch({ type: retrieveEventsCases.LOADING, payload: true });
    const bodyRequest = searchEventsQuery(date, city, userId, email);
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
      if (data) {
        dispatch({
          type: retrieveEventsCases.EVENTS_RETRIEVED,
          payload: data.searchEvents,
        });
      } else if (errors) {
        dispatch({
          type: retrieveEventsCases.ERROR,
          payload: errors[0].message,
        });
      }
    } catch (err) {
      if (err)
        dispatch({
          type: retrieveEventsCases.ERROR,
          payload: capitalizeFirst(strings.error.FETCH_ERROR),
        });
    }
  };
};

export const getEventsClearState = () => {
  return (dispatch, getState) => {
    dispatch({ type: retrieveEventsCases.CLEAR_STATE });
  };
};
