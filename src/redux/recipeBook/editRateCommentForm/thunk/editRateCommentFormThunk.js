import { editRateCommentFormCases } from "../../../config/cases/Cases";

let count = 0;

export const rateCommentRecipeUpdated = () => {
  return (dispatch, getState) => {
    count++;
    dispatch({
      type: editRateCommentFormCases.RECIPE_UPDATED,
      payload: count,
    });
  };
};
