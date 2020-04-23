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
        loadingMyRecipes: false,
        myRecipesRetrieved: action.payload,
      };
    case retrieveMyRecipesCases.ERROR:
      return {
        ...state,
        loadingMyRecipes: false,
        myRecipesError: action.payload,
      };
    case retrieveMyRecipesCases.CLEAR_ERROR_STATE:
      return { ...state, myRecipesError: null };
    case retrieveMyRecipesCases.CLEAR_STATE:
      return (state = initialState);
    default:
      return state;
  }
};

export default retrieveMyRecipesReducer;
