import { showRemindPassCases } from "../../config/cases/Cases";

export const showRemindPassComponent = (bool) => {
  return (dispatch, getState) => {
    dispatch({ type: showRemindPassCases.FORM_SHOWED, payload: bool });
  };
};
