import { recipeCategorySelectedCases } from "../../../config/cases/Cases";

const initialState = {
  recipeButtonId: 0,
};

const recipeCategorySelectedReducer = (state = initialState, action) => {
  switch (action.type) {
    case recipeCategorySelectedCases.BUTTON_ID_RETRIEVED:
      return { ...state, ...initialState, recipeButtonId: action.payload };
    case recipeCategorySelectedCases.CLEAR_STATE:
      return (state = initialState);
    default:
      return state;
  }
};

export default recipeCategorySelectedReducer;
