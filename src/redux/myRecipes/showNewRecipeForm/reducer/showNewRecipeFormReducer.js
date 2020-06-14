import { showNewRecipeFormCases } from "../../../config/cases/Cases";

const initialState = {
  newRecipeFormShowed: false,
};

const showNewRecipeFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case showNewRecipeFormCases.FORM_SHOWED:
      return {
        ...state,
        newRecipeFormShowed: action.payload,
      };
    default:
      return state;
  }
};

export default showNewRecipeFormReducer;
