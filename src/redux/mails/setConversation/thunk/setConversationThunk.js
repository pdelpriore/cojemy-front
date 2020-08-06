import { setConversationCases } from "../../../config/cases/Cases";

export const setConversation = (conversation) => {
  return (dispatch, getState) => {
    dispatch({
      type: setConversationCases.CONVERSATION_RETRIEVED,
      payload: conversation,
    });
  };
};

export const setConversationClearState = () => {
  return (dispatch, getState) => {
    dispatch({ type: setConversationCases.CLEAR_STATE });
  };
};
