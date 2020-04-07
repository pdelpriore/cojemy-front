import { editRateCommentFormCases } from "../../../config/cases/Cases";

const initialState = {
  recipeUpdated: 0,
};

const editRateCommentFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case editRateCommentFormCases.RECIPE_UPDATED:
      return { ...state, recipeUpdated: action.payload };
    default:
      return state;
  }
};

export default editRateCommentFormReducer;
