import { recipeButtonTurnedOnCases } from "../../../config/cases/Cases";

let count = 0;

export const recipeButtonTurnedOn = () => {
  return (dispatch, getState) => {
    count++;
    dispatch({
      type: recipeButtonTurnedOnCases.BUTTON_PRESSES,
      payload: count,
    });
  };
};
