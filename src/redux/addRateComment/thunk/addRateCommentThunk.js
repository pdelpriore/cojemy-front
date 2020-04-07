import { addRateCommentCases } from "../../config/cases/Cases";

let count = 0;

export const addRateComment = () => {
  return (dispatch, getState) => {
    count++;
    dispatch({
      type: addRateCommentCases.RATE_COMMENT_ADDED,
      payload: count,
    });
  };
};
