import { turnOffRecipeButtonsCases } from "../../../config/cases/Cases";

export const turnOffRecipeButtons = (bool) => {
  return (dispatch, getState) => {
    dispatch({
      type: turnOffRecipeButtonsCases.SEARCH_INPUT_FILLED,
      payload: bool,
    });
  };
};
