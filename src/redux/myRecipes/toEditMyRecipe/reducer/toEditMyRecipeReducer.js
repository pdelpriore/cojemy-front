import { toEditMyRecipeCases } from "../../../config/cases/Cases";

const initialState = {
  myRecipeToEdit: {},
};

const toEditMyRecipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case toEditMyRecipeCases.MY_RECIPE_TO_EDIT:
      return { ...state, ...initialState, myRecipeToEdit: action.payload };
    case toEditMyRecipeCases.CLEAR_STATE:
      return (state = initialState);
    default:
      return state;
  }
};

export default toEditMyRecipeReducer;
