import { setMessagesCases } from "../../../config/cases/Cases";

const initialState = {
  messages: [],
};

const setMessagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case setMessagesCases.MESSAGES_RETRIEVED:
      return { ...state, messages: action.payload };
    case setMessagesCases.CLEAR_STATE:
      return (state = initialState);
    default:
      return state;
  }
};

export default setMessagesReducer;
