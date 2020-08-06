import { setConversationCases } from "../../../config/cases/Cases";

const initialState = {
  conversations: [],
};

const setConversationReducer = (state = initialState, action) => {
  switch (action.type) {
    case setConversationCases.CONVERSATION_RETRIEVED:
      return { ...state, conversations: action.payload };
    case setConversationCases.CLEAR_STATE:
      return (state = initialState);
    default:
      return state;
  }
};

export default setConversationReducer;
