import { showRecipeDetailsCases } from "../../config/cases/Cases";

const initialState = {
  detailsShowed: false,
  detailsDataRetrieved: {}
};

const showRecipeDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case showRecipeDetailsCases.SHOWED:
      return { ...state, ...initialState, detailsShowed: action.payload };
    case showRecipeDetailsCases.DETAILS_RETRIVED:
      return { ...state, detailsDataRetrieved: action.payload };
    case showRecipeDetailsCases.CLEAR_STATE:
      return (state = initialState);
    default:
      return state;
  }
};

export default showRecipeDetailsReducer;
