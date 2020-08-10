import { setMessageIdCases } from "../../../config/cases/Cases";

export const setMessageId = (id) => {
  return (dispatch, getState) => {
    dispatch({ type: setMessageIdCases.ID_RETRIEVED, payload: id });
  };
};

export const setMessageIdClearState = () => {
  return (dispatch, getState) => {
    dispatch({ type: setMessageIdCases.CLEAR_STATE });
  };
};
