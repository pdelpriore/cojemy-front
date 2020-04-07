import { hideRateCommentFormCases } from "../../../config/cases/Cases";

export const hideRateCommentForm = (bool) => {
  return (dispatch, getState) => {
    dispatch({
      type: hideRateCommentFormCases.RECIPE_LIST_ITEM_CHANGED,
      payload: bool,
    });
  };
};
