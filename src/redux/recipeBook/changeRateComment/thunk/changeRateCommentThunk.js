import { changeRateCommentCases } from "../../../config/cases/Cases";

export const changeRateComment = (bool) => {
  return (dispatch, getState) => {
    dispatch({
      type: changeRateCommentCases.RATE_COMMENT_CHANGED,
      payload: bool,
    });
  };
};
