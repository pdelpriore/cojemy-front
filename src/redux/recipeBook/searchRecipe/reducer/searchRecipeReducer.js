import { searchRecipeCases } from "../../../config/cases/Cases";

const initialState = {
  loadingSearchRecipes: false,
  searchRecipesFound: null,
  searchRecipesError: null,
};

const searchRecipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case searchRecipeCases.LOADING:
      return {
        ...state,
        ...initialState,
        loadingSearchRecipes: action.payload,
      };
    case searchRecipeCases.RECIPE_FOUND:
      return {
        ...state,
        ...initialState,
        loadingSearchRecipes: false,
        searchRecipesFound: action.payload,
      };
    case searchRecipeCases.ERROR:
      return {
        ...state,
        ...initialState,
        loadingSearchRecipes: false,
        searchRecipesError: action.payload,
      };
    case searchRecipeCases.CLEAR_STATE:
      return (state = initialState);
    default:
      return state;
  }
};

export default searchRecipeReducer;
