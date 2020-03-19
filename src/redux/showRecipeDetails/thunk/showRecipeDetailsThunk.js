import { showRecipeDetailsCases } from "../../config/cases/Cases";

export const showRecipeDetailsComponent = bool => {
  return (dispatch, getState) => {
    if (bool) {
      dispatch({ type: showRecipeDetailsCases.SHOWED, payload: bool });
    }
  };
};

export const retrieveRecipeDetails = data => {
  return (dispatch, getState) => {
    dispatch({ type: showRecipeDetailsCases.DETAILS_RETRIVED, payload: data });
  };
};

export const recipeDetailsClearState = () => {
  return (dispatch, getState) => {
    dispatch({ type: showRecipeDetailsCases.CLEAR_STATE });
  };
};
