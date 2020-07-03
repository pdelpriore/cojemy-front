import {
  toEditEventCases,
  showNewEventFormCases,
  myEventPreviewCases,
} from "../../../config/cases/Cases";

export const toEditEvent = (data) => {
  return (dispatch, getState) => {
    dispatch({ type: toEditEventCases.EVENT_TO_EDIT, payload: data });
    dispatch({ type: myEventPreviewCases.PREVIEW_SHOWN, payload: false });
    dispatch({ type: showNewEventFormCases.FORM_SHOWN, payload: true });
  };
};

export const toEditEventClearState = () => {
  return (dispatch, getState) => {
    dispatch({ type: toEditEventCases.CLEAR_STATE });
  };
};
