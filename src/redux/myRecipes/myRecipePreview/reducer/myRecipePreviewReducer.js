import { myRecipePreviewCases } from "../../../config/cases/Cases";

const initialState = {
  myRecipePreviewShown: false,
  myRecipePreviewData: {},
};

const myRecipePreviewReducer = (state = initialState, action) => {
  switch (action.type) {
    case myRecipePreviewCases.PREVIEW_SHOWN:
      return { ...state, myRecipePreviewShown: action.payload };
    case myRecipePreviewCases.PREVIEW_DATA_RECEIVED:
      return { ...state, myRecipePreviewData: action.payload };
    case myRecipePreviewCases.CLEAR_STATE:
      return (state = initialState);
    default:
      return state;
  }
};

export default myRecipePreviewReducer;
