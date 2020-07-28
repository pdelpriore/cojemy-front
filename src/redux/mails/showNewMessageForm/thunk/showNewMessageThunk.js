import { showNewMessageFormCases } from "../../../config/cases/Cases";

export const showNewMessageForm = (bool) => {
  return (dispatch, getState) => {
    dispatch({ type: showNewMessageFormCases.FORM_SHOWN, payload: bool });
  };
};
