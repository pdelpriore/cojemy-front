import { showNewEventFormCases } from "../../../config/cases/Cases";

export const showNewEventForm = (bool) => {
  return (dispatch, getState) => {
    dispatch({ type: showNewEventFormCases.FORM_SHOWN, payload: bool });
  };
};
