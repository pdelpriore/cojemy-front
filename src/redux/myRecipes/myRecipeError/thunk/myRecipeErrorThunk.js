import { newRecipeErrorCases } from "../../../config/cases/Cases";

export const myRecipeError = (value) => {
  return (dispatch, getState) => {
    dispatch({
      type: newRecipeErrorCases.ERROR_RECEIVED,
      payload: value,
    });
  };
};

export const myRecipeErrorClearState = () => {
  return (dispatch, getState) => {
    dispatch({ type: newRecipeErrorCases.CLEAR_STATE });
  };
};
