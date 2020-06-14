import {
  toEditMyRecipeCases,
  showNewRecipeFormCases,
  myRecipePreviewCases,
} from "../../../config/cases/Cases";

export const toEditMyRecipe = (data) => {
  return (dispatch, getState) => {
    dispatch({ type: toEditMyRecipeCases.MY_RECIPE_TO_EDIT, payload: data });
    dispatch({ type: myRecipePreviewCases.PREVIEW_SHOWED, payload: false });
    dispatch({ type: showNewRecipeFormCases.FORM_SHOWED, payload: true });
  };
};

export const toEditMyRecipeClearState = () => {
  return (dispatch, getState) => {
    dispatch({ type: toEditMyRecipeCases.CLEAR_STATE });
  };
};
