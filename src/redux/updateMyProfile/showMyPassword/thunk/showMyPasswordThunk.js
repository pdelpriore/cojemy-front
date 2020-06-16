import { showMyPasswordFormCases } from "../../../config/cases/Cases";

export const showMyPasswordForm = (bool) => {
  return (dispatch, getState) => {
    dispatch({ type: showMyPasswordFormCases.FORM_SHOWN, payload: bool });
  };
};
