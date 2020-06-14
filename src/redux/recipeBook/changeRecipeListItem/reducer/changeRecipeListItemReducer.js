import { changeRecipeListItemCases } from "../../../config/cases/Cases";

const initialState = {
  recipeListItemChanged: false,
};

const changeRecipeListItemReducer = (state = initialState, action) => {
  switch (action.type) {
    case changeRecipeListItemCases.RECIPE_LIST_ITEM_CHANGED:
      return {
        ...state,
        recipeListItemChanged: action.payload,
      };
    default:
      return state;
  }
};

export default changeRecipeListItemReducer;
