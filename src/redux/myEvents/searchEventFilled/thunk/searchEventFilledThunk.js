import { searchEventFilledCases } from "../../../config/cases/Cases";

export const searchEventFilled = (bool) => {
  return (dispatch, getState) => {
    dispatch({ type: searchEventFilledCases.FORM_FILLED, payload: bool });
  };
};
