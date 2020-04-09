import { removeRateCommentCases } from "../../../config/cases/Cases";

const initialState = {
  rateCommentRemoved: 0,
};

const removeRateCommentReducer = (state = initialState, action) => {
  switch (action.type) {
    case removeRateCommentCases.RATE_COMMENT_REMOVED:
      return { ...state, ...initialState, rateCommentRemoved: action.payload };
    default:
      return state;
  }
};

export default removeRateCommentReducer;
