import { removeRateCommentCases } from "../../../config/cases/Cases";

export const removeRateComment = (bool) => {
  return (dispatch, getState) => {
    dispatch({
      type: removeRateCommentCases.RATE_COMMENT_REMOVED,
      payload: bool,
    });
  };
};
