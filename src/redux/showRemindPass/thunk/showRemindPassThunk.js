import { showRemindPassCases } from "../../config/cases/Cases";

export const showRemindPassComponent = bool => {
  return (dispatch, getState) => {
    if (bool) {
      dispatch({ type: showRemindPassCases.SHOWED, payload: true });
    } else {
      dispatch({ type: showRemindPassCases.HIDED, payload: false });
    }
  };
};
