import { mailErrorCases } from "../../../config/cases/Cases";

export const setMailError = (err) => {
  return (dispatch, getState) => {
    dispatch({ type: mailErrorCases.ERROR_RETRIEVED, payload: err });
  };
};

export const mailErrorClearState = () => {
  return (dispatch, getState) => {
    dispatch({ type: mailErrorCases.CLEAR_STATE });
  };
};
