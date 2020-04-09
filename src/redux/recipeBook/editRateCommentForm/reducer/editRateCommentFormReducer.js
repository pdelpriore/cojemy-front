import { editRateCommentFormCases } from "../../../config/cases/Cases";

const initialState = {
  recipeUpdated: false,
};

const editRateCommentFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case editRateCommentFormCases.RECIPE_UPDATED:
      return { ...state, ...initialState, recipeUpdated: action.payload };
    default:
      return state;
  }
};

export default editRateCommentFormReducer;
