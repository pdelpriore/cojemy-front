import {
  showNewMessageFormCases,
  setMessageIdCases,
  chooseRecipientCases,
  setConversationCases,
  conversationWindowOpenCases,
} from "../../../config/cases/Cases";
import { sortConversationsByDate } from "./sortConversationsByDate";

export const continueConversation = (message, userDataId) => {
  return (dispatch, getState) => {
    dispatch({ type: setMessageIdCases.ID_RETRIEVED, payload: message._id });
    dispatch({
      type: chooseRecipientCases.RECIPIENT_CHOSEN,
      payload:
        userDataId === message.sender._id ? message.recipient : message.sender,
    });
    dispatch({
      type: setConversationCases.CONVERSATION_RETRIEVED,
      payload: sortConversationsByDate(message),
    });
    dispatch({ type: conversationWindowOpenCases.WINDOW_OPEN, payload: true });
    dispatch({ type: showNewMessageFormCases.FORM_SHOWN, payload: true });
  };
};
