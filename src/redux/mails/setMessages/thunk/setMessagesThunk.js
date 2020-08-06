import { setMessagesCases } from "../../../config/cases/Cases";

export const setMessages = (messages) => {
  return (dispatch, getState) => {
    dispatch({
      type: setMessagesCases.MESSAGES_RETRIEVED,
      payload: messages,
    });
  };
};

export const setMessagesClearState = () => {
  return (dispatch, getState) => {
    dispatch({ type: setMessagesCases.CLEAR_STATE });
  };
};
