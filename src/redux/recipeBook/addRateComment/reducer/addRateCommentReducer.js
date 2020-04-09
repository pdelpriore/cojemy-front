import { addRateCommentCases } from "../../../config/cases/Cases";

const initialState = {
  rateCommentAdded: 0,
};

const addRateCommentReducer = (state = initialState, action) => {
  switch (action.type) {
    case addRateCommentCases.RATE_COMMENT_ADDED:
      return { ...state, ...initialState, rateCommentAdded: action.payload };
    default:
      return state;
  }
};

export default addRateCommentReducer;
