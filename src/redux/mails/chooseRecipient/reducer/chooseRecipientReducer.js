import { chooseRecipientCases } from "../../../config/cases/Cases";

const initialState = {
  recipient: {},
};

const chooseRecipientReducer = (state = initialState, action) => {
  switch (action.type) {
    case chooseRecipientCases.RECIPIENT_CHOSEN:
      return { ...state, recipient: action.payload };
    case chooseRecipientCases.CLEAR_STATE:
      return (state = initialState);
    default:
      return state;
  }
};

export default chooseRecipientReducer;
