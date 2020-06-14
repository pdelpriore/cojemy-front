import { changeRecipeListItemCases } from "../../../config/cases/Cases";

export const changeRecipeListItem = (bool) => {
  return (dispatch, getState) => {
    dispatch({
      type: changeRecipeListItemCases.RECIPE_LIST_ITEM_CHANGED,
      payload: bool,
    });
  };
};
