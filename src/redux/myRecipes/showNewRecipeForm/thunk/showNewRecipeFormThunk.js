import { showNewRecipeFormCases } from "../../../config/cases/Cases";

export const showNewRecipeForm = (bool) => {
  return (dispatch, getState) => {
    dispatch({ type: showNewRecipeFormCases.FORM_SHOWED, payload: bool });
  };
};
