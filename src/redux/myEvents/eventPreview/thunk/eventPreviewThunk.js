import {
  myEventPreviewCases,
  showNewEventFormCases,
} from "../../../config/cases/Cases";

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

export const eventPreviewClearState = () => {
  return (dispatch, getState) => {
    dispatch({ type: myEventPreviewCases.CLEAR_STATE });
  };
};
