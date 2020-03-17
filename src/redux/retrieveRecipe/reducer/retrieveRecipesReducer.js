import { retrieveRecipesCases } from "../../config/cases/Cases";

const initialState = {
  loadingRecipes: false,
  recipesRetrieved: null,
  recipesError: null
};

const retrieveRecipesReducer = (state = initialState, action) => {
  switch (action.type) {
    case retrieveRecipesCases.LOADING:
      return { ...state, ...initialState, loadingRecipes: action.payload };
    case retrieveRecipesCases.RECIPE_RETRIVED:
      return {
        ...state,
        ...initialState,
        loadingRecipes: false,
        recipesRetrieved: action.payload
      };
    case retrieveRecipesCases.ERROR:
      return {
        ...state,
        ...initialState,
        loadingRecipes: false,
        recipesError: action.payload
      };
    default:
      return state;
  }
};

export default retrieveRecipesReducer;
