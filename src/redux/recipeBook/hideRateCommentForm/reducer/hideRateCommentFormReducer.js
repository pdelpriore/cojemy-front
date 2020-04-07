import { hideRateCommentFormCases } from "../../../config/cases/Cases";

const initialState = {
  recipeListItemChanged: false,
};

const hideRateCommentFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case hideRateCommentFormCases.RECIPE_LIST_ITEM_CHANGED:
      return {
        ...state,
        recipeListItemChanged: action.payload,
      };
    default:
      return state;
  }
};

export default hideRateCommentFormReducer;
