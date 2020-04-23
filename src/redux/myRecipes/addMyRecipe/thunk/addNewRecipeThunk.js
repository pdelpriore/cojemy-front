import { addNewRecipeCases } from "../../../config/cases/Cases";

export const addNewRecipe = (bool) => {
  return (dispatch, getState) => {
    dispatch({
      type: addNewRecipeCases.RECIPE_ADDED,
      payload: bool,
    });
  };
};
