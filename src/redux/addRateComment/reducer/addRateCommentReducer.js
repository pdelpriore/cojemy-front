import { addRateCommentCases } from "../../config/cases/Cases";

const initialState = {
  rateCommentAdded: false
};

const addRateCommentReducer = (state = initialState, action) => {
  switch (action.type) {
    case addRateCommentCases.RATE_COMMENT_ADDED:
      return { ...state, rateCommentAdded: action.payload };
    default:
      return state;
  }
};

export default addRateCommentReducer;
