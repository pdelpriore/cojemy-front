import { showRecipeDetailsCases } from "../../config/cases/Cases";

const initialState = {
  detailsLoading: false,
  detailsShowed: false,
  rateCommentEdited: 0,
  detailsDataRetrieved: {}
};

const showRecipeDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case showRecipeDetailsCases.SHOWED:
      return {
        ...state,
        rateCommentEdited: 0,
        detailsShowed: action.payload
      };
    case showRecipeDetailsCases.LOADING:
      return { ...state, detailsLoading: action.payload };
    case showRecipeDetailsCases.RATE_COMMENT_EDITED:
      return { ...state, rateCommentEdited: action.payload };
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
