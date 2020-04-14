import { retrieveMyRecipesCases } from "../../../config/cases/Cases";

const initialState = {
  loadingMyRecipes: false,
  myRecipesRetrieved: null,
  myRecipesError: null,
};

const retrieveMyRecipesReducer = (state = initialState, action) => {
  switch (action.type) {
    case retrieveMyRecipesCases.LOADING:
      return { ...state, ...initialState, loadingMyRecipes: action.payload };
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
        ...initialState,
        loadingMyRecipes: false,
        myRecipesError: action.payload,
      };
    default:
      return state;
  }
};

export default retrieveMyRecipesReducer;
