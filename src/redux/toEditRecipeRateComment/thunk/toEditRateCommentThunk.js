import { toEditRecipeRateCommentCases } from "../../config/cases/Cases";

export const toEditRateComment = data => {
  return (dispatch, getState) => {
    dispatch({
      type: toEditRecipeRateCommentCases.RATE_COMMENT_RETRIEVED,
      payload: data
    });
  };
};

export const toEditRateCommentClearState = () => {
  return (dispatch, getState) => {
    dispatch({ type: toEditRecipeRateCommentCases.CLEAR_STATE });
  };
};
