import { chooseRecipientCases } from "../../../config/cases/Cases";

export const chooseRecipient = (data) => {
  return (dispatch, getState) => {
    dispatch({ type: chooseRecipientCases.RECIPIENT_CHOSEN, payload: data });
  };
};

export const chooseRecipientClearState = () => {
  return (dispatch, getState) => {
    dispatch({ type: chooseRecipientCases.CLEAR_STATE });
  };
};
