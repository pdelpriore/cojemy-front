import { showRecipeDetailsCases } from "../../config/cases/Cases";

const initialState = {
  detailsLoading: false,
  detailsShowed: false,
  detailsDataRetrieved: {}
};

const showRecipeDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case showRecipeDetailsCases.SHOWED:
      return { ...state, detailsShowed: action.payload };
    case showRecipeDetailsCases.LOADING:
      return { ...state, detailsLoading: action.payload };
    case showRecipeDetailsCases.DETAILS_RETRIVED:
      return {
        ...state,
        detailsLoading: false,
        detailsDataRetrieved: action.payload
      };
    case showRecipeDetailsCases.CLEAR_STATE:
      return (state = initialState);
    default:
      return state;
  }
};

export default showRecipeDetailsReducer;
