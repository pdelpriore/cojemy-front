import { toEditRecipeRateCommentCases } from "../../config/cases/Cases";

const initialState = {
  rateAndComment: {}
};

const toEditRecipeRateCommentReducer = (state = initialState, action) => {
  switch (action.type) {
    case toEditRecipeRateCommentCases.RATE_COMMENT_RETRIEVED:
      return { ...state, ...initialState, rateAndComment: action.payload };
    case toEditRecipeRateCommentCases.CLEAR_STATE:
      return (state = initialState);
    default:
      return state;
  }
};

export default toEditRecipeRateCommentReducer;
