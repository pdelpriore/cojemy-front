import {
  myEventPreviewCases,
  showNewEventFormCases,
  changeEventCases,
} from "../../../config/cases/Cases";
import { joinEventQuery } from "../query/joinEventQuery";
import { strings } from "../../../../strings/Strings";
import { capitalizeFirst } from "../../../../util/Util";

export const showEventPreview = (bool) => {
  return (dispatch, getState) => {
    dispatch({ type: myEventPreviewCases.PREVIEW_SHOWN, payload: bool });
  };
};

export const eventData = (data) => {
  return (dispatch, getState) => {
    dispatch({
      type: myEventPreviewCases.PREVIEW_DATA_RECEIVED,
      payload: data,
    });
    dispatch({ type: showNewEventFormCases.FORM_SHOWN, payload: false });
    dispatch({ type: myEventPreviewCases.PREVIEW_SHOWN, payload: true });
  };
};

export const joinEvent = (eventId, userId, email) => {
  return async (dispatch, getState) => {
    dispatch({ type: myEventPreviewCases.LOADING, payload: true });
    const bodyRequest = joinEventQuery(eventId, userId, email);
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
      if (data) {
        dispatch({
          type: myEventPreviewCases.PREVIEW_DATA_RECEIVED,
          payload: data.joinEvent,
        });
        dispatch({
          type: changeEventCases.EVENT_CHANGED,
          payload: true,
        });
      }
    } catch (err) {
      if (err) {
        dispatch({ type: myEventPreviewCases.PREVIEW_SHOWN, payload: false });
        dispatch({
          type: myEventPreviewCases.ERROR,
          payload: capitalizeFirst(strings.error.FETCH_ERROR),
        });
      }
    }
  };
};

export const eventPreviewClearState = () => {
  return (dispatch, getState) => {
    dispatch({ type: myEventPreviewCases.CLEAR_STATE });
  };
};

export const eventPreviewClearErrorState = () => {
  return (dispatch, getState) => {
    dispatch({ type: myEventPreviewCases.CLEAR_ERROR_STATE });
  };
};
