import { flagCases } from "../../config/cases/Cases";

export const showRemindPassComponent = (bool) => {
  return (dispatch, getState) => {
    if (bool) {
      dispatch({ type: flagCases.showRemindPassCases.SHOWED, payload: true });
    } else {
      dispatch({ type: flagCases.showRemindPassCases.HIDED, payload: false });
    }
  };
};
