import { changeEventCases } from "../../../config/cases/Cases";
import { addNewEventQuery } from "../query/addNewEventQuery";
import { editEventQuery } from "../query/editEventQuery";
import { removeEventQuery } from "../query/removeEventQuery";
import { strings } from "../../../../strings/Strings";
import { capitalizeFirst } from "../../../../util/Util";

export const addNewEvent = (
  title,
  eventImage,
  addressObj,
  description,
  availablePlaces,
  eventDate,
  tel,
  userId,
  email
) => {
  return async (dispatch, getState) => {
    dispatch({ type: changeEventCases.LOADING, payload: true });
    const bodyRequest = addNewEventQuery(
      title,
      eventImage,
      addressObj,
      description,
      availablePlaces,
      eventDate,
      tel,
      userId,
      email,
      new Date()
    );
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
      const { errors, data } = responseData;
      if (data.addMyEvent !== null) {
        dispatch({
          type: changeEventCases.EVENT_CHANGED,
          payload: data.addMyEvent,
        });
      } else if (errors) {
        dispatch({
          type: changeEventCases.ERROR,
          payload: errors[0].message,
        });
      }
    } catch (err) {
      if (err)
        dispatch({
          type: changeEventCases.ERROR,
          payload: capitalizeFirst(strings.error.FETCH_ERROR),
        });
    }
  };
};

export const editEvent = (
  title,
  eventImage,
  addressObj,
  description,
  availablePlaces,
  eventDate,
  tel,
  eventId,
  addressId,
  userId,
  email
) => {
  return async (dispatch, getState) => {
    dispatch({ type: changeEventCases.LOADING, payload: true });
    const bodyRequest = editEventQuery(
      title,
      eventImage,
      addressObj,
      description,
      availablePlaces,
      eventDate,
      tel,
      eventId,
      addressId,
      userId,
      email
    );
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
      const { errors, data } = responseData;
      if (data.editEvent !== null) {
        dispatch({
          type: changeEventCases.EVENT_CHANGED,
          payload: data.editEvent,
        });
      } else if (errors) {
        dispatch({
          type: changeEventCases.ERROR,
          payload: errors[0].message,
        });
      }
    } catch (err) {
      if (err)
        dispatch({
          type: changeEventCases.ERROR,
          payload: capitalizeFirst(strings.error.FETCH_ERROR),
        });
    }
  };
};

export const removeEvent = (eventId, addressId, userId, email) => {
  return async (dispatch, getState) => {
    dispatch({ type: changeEventCases.LOADING, payload: true });
    const bodyRequest = removeEventQuery(eventId, addressId, userId, email);
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
      const { errors, data } = responseData;
      if (data.removeEvent !== null) {
        dispatch({
          type: changeEventCases.EVENT_CHANGED,
          payload: data.removeEvent,
        });
      } else if (errors) {
        dispatch({
          type: changeEventCases.ERROR,
          payload: errors[0].message,
        });
      }
    } catch (err) {
      if (err)
        dispatch({
          type: changeEventCases.ERROR,
          payload: capitalizeFirst(strings.error.FETCH_ERROR),
        });
    }
  };
};

export const changeEventClearState = () => {
  return (dispatch, getState) => {
    dispatch({ type: changeEventCases.CLEAR_STATE });
  };
};
