import {
  myRecipePreviewCases,
  showNewRecipeFormCases,
} from "../../../config/cases/Cases";

export const showMyRecipePreview = (bool) => {
  return (dispatch, getState) => {
    dispatch({ type: myRecipePreviewCases.PREVIEW_SHOWED, payload: bool });
  };
};

export const myRecipeData = (data) => {
  return (dispatch, getState) => {
    dispatch({
      type: myRecipePreviewCases.PREVIEW_DATA_RECEIVED,
      payload: data,
    });
    dispatch({ type: showNewRecipeFormCases.FORM_SHOWED, payload: false });
    dispatch({ type: myRecipePreviewCases.PREVIEW_SHOWED, payload: true });
  };
};

export const myRecipePreviewClearState = () => {
  return (dispatch, getState) => {
    dispatch({ type: myRecipePreviewCases.CLEAR_STATE });
  };
};
