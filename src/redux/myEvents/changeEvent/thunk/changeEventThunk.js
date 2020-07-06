import { changeEventCases } from "../../../config/cases/Cases";
import { addNewEventQuery } from "../query/addNewEventQuery";
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

export const changeEventClearState = () => {
  return (dispatch, getState) => {
    dispatch({ type: changeEventCases.CLEAR_STATE });
  };
};
