import { conversationWindowOpenCases } from "../../../config/cases/Cases";

const initialState = {
  windowOpen: false,
};

const conversationWindowOpenReducer = (state = initialState, action) => {
  switch (action.type) {
    case conversationWindowOpenCases.WINDOW_OPEN:
      return { ...state, windowOpen: action.payload };
    default:
      return state;
  }
};

export default conversationWindowOpenReducer;
