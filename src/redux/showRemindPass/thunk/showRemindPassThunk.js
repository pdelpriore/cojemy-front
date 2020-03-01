import { showRemindPass } from "../../config/cases/Cases";

export const showRemindPassThunk = bool => {
  return (dispatch, getState) => {
    if (bool) {
      dispatch({ type: showRemindPass.SHOWED, payload: true });
    } else {
      dispatch({ type: showRemindPass.HIDED, payload: false });
    }
  };
};
