import { addRateCommentCases } from "../../../config/cases/Cases";

export const addRateComment = (bool) => {
  return (dispatch, getState) => {
    dispatch({
      type: addRateCommentCases.RATE_COMMENT_ADDED,
      payload: bool,
    });
  };
};
