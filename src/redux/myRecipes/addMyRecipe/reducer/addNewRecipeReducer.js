import { addNewRecipeCases } from "../../../config/cases/Cases";

const initialState = {
  newRecipeAdded: false,
};

const addNewRecipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case addNewRecipeCases.RECIPE_ADDED:
      return { ...state, newRecipeAdded: action.payload };
    default:
      return state;
  }
};

export default addNewRecipeReducer;
