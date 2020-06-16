import { showRecipeDetailsCases } from "../../../config/cases/Cases";

const initialState = {
  detailsLoading: false,
  detailsShown: false,
  detailsDataRetrieved: {},
};

const showRecipeDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case showRecipeDetailsCases.SHOWN:
      return {
        ...state,
        detailsShown: action.payload,
      };
    case showRecipeDetailsCases.LOADING:
      return { ...state, detailsLoading: action.payload };
    case showRecipeDetailsCases.DETAILS_RETRIVED:
      return {
        ...state,
        detailsLoading: false,
        detailsDataRetrieved: action.payload,
      };
    case showRecipeDetailsCases.CLEAR_STATE:
      return (state = initialState);
    default:
      return state;
  }
};

export default showRecipeDetailsReducer;
