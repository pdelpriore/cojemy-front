import { showNewRecipeFormCases } from "../../../config/cases/Cases";

const initialState = {
  newRecipeFormShown: false,
};

const showNewRecipeFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case showNewRecipeFormCases.FORM_SHOWN:
      return {
        ...state,
        newRecipeFormShown: action.payload,
      };
    default:
      return state;
  }
};

export default showNewRecipeFormReducer;
