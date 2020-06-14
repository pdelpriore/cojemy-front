import { retrieveMyRecipesCases } from "../../../config/cases/Cases";

const initialState = {
  loadingMyRecipes: false,
  myRecipesRetrieved: null,
  myRecipesError: null,
};

const retrieveMyRecipesReducer = (state = initialState, action) => {
  switch (action.type) {
    case retrieveMyRecipesCases.LOADING:
      return { ...state, loadingMyRecipes: action.payload };
    case retrieveMyRecipesCases.MY_RECIPES_RETRIEVED:
      return {
        ...state,
        ...initialState,
        myRecipesRetrieved: action.payload,
      };
    case retrieveMyRecipesCases.ERROR:
      return {
        ...state,
        ...initialState,
        myRecipesError: action.payload,
      };
    case retrieveMyRecipesCases.CLEAR_STATE:
      return (state = initialState);
    default:
      return state;
  }
};

export default retrieveMyRecipesReducer;
