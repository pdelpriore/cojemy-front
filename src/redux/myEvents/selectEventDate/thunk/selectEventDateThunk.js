import { selectEventDateCases } from "../../../config/cases/Cases";

export const selectEventDate = (date) => {
  return (dispatch, getState) => {
    dispatch({ type: selectEventDateCases.DATE_RETRIEVED, payload: date });
  };
};

export const selectEventDateClearState = () => {
  return (dispatch, getState) => {
    dispatch({ type: selectEventDateCases.CLEAR_STATE });
  };
};
