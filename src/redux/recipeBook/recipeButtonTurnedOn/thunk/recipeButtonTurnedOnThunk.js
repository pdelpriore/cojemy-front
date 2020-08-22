import { recipeButtonTurnedOnCases } from "../../../config/cases/Cases";

export const recipeButtonTurnedOn = (count) => {
  return (dispatch, getState) => {
    dispatch({
      type: recipeButtonTurnedOnCases.BUTTON_PRESSES,
      payload: count,
    });
  };
};
