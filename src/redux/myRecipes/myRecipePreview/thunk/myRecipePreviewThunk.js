import {
  myRecipePreviewCases,
  showNewRecipeFormCases,
} from "../../../config/cases/Cases";

export const showMyRecipePreview = (bool) => {
  return (dispatch, getState) => {
    dispatch({ type: myRecipePreviewCases.PREVIEW_SHOWN, payload: bool });
  };
};

export const myRecipeData = (data) => {
  return (dispatch, getState) => {
    dispatch({
      type: myRecipePreviewCases.PREVIEW_DATA_RECEIVED,
      payload: data,
    });
    dispatch({ type: showNewRecipeFormCases.FORM_SHOWN, payload: false });
    dispatch({ type: myRecipePreviewCases.PREVIEW_SHOWN, payload: true });
  };
};

export const myRecipePreviewClearState = () => {
  return (dispatch, getState) => {
    dispatch({ type: myRecipePreviewCases.CLEAR_STATE });
  };
};
