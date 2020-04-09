import { editRateCommentFormCases } from "../../../config/cases/Cases";

export const rateCommentRecipeUpdated = (bool) => {
  return (dispatch, getState) => {
    dispatch({
      type: editRateCommentFormCases.RECIPE_UPDATED,
      payload: bool,
    });
  };
};
