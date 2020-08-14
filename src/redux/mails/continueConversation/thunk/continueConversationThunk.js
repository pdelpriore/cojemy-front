import {
  showNewMessageFormCases,
  setMessageIdCases,
  chooseRecipientCases,
  setConversationCases,
} from "../../../config/cases/Cases";

export const continueConversation = (message) => {
  return (dispatch, getState) => {
    dispatch({ type: setMessageIdCases.ID_RETRIEVED, payload: message._id });
    dispatch({
      type: chooseRecipientCases.RECIPIENT_CHOSEN,
      payload: message.recipient,
    });
    dispatch({
      type: setConversationCases.CONVERSATION_RETRIEVED,
      payload: message.conversations,
    });
    dispatch({ type: showNewMessageFormCases.FORM_SHOWN, payload: true });
  };
};
