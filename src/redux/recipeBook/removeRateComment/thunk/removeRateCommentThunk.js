import { removeRateCommentCases } from "../../../config/cases/Cases";

let count = 0;

export const removeRateComment = () => {
  return (dispatch, getState) => {
    count++;
    dispatch({
      type: removeRateCommentCases.RATE_COMMENT_REMOVED,
      payload: count,
    });
  };
};
