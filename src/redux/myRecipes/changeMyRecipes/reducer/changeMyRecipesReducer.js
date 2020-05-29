import { changeMyRecipesCases } from "../../../config/cases/Cases";

const initialState = {
  loading: false,
  recipeUpdated: false,
  myRecipeChangeError: null,
};

const changeMyRecipesReducer = (state = initialState, action) => {
  switch (action.type) {
    case changeMyRecipesCases.LOADING:
      return { ...state, ...initialState, loading: action.payload };
    case changeMyRecipesCases.RECIPE_UPDATED:
      return { ...state, ...initialState, recipeUpdated: action.payload };
    case changeMyRecipesCases.ERROR:
      return { ...state, ...initialState, myRecipeChangeError: action.payload };
    case changeMyRecipesCases.CLEAR_STATE:
      return (state = initialState);
    default:
      return state;
  }
};

export default changeMyRecipesReducer;
