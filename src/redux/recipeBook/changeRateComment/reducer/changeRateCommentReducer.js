import { changeRateCommentCases } from "../../../config/cases/Cases";

const initialState = {
  rateCommentAdded: false,
};

const changeRateCommentReducer = (state = initialState, action) => {
  switch (action.type) {
    case changeRateCommentCases.RATE_COMMENT_CHANGED:
      return { ...state, rateCommentAdded: action.payload };
    default:
      return state;
  }
};

export default changeRateCommentReducer;
