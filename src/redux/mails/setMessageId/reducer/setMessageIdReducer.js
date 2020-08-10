import { setMessageIdCases } from "../../../config/cases/Cases";

const initialState = {
  messageId: null,
};

const setMessageIdReducer = (state = initialState, action) => {
  switch (action.type) {
    case setMessageIdCases.ID_RETRIEVED:
      return { ...state, messageId: action.payload };
    case setMessageIdCases.CLEAR_STATE:
      return (state = initialState);
    default:
      return state;
  }
};

export default setMessageIdReducer;
