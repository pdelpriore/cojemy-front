import { showRemindPassCases } from "../../../config/cases/Cases";

export const showRemindPassComponent = (bool) => {
  return (dispatch, getState) => {
    dispatch({ type: showRemindPassCases.FORM_SHOWN, payload: bool });
  };
};
