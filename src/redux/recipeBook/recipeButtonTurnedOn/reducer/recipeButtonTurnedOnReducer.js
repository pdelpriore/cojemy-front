import { recipeButtonTurnedOnCases } from "../../../config/cases/Cases";

const initialState = {
  recipeButtonPressed: 0,
};

const recipeButtonTurnedOnReducer = (state = initialState, action) => {
  switch (action.type) {
    case recipeButtonTurnedOnCases.BUTTON_PRESSES:
      return { ...state, ...initialState, recipeButtonPressed: action.payload };
    default:
      return state;
  }
};

export default recipeButtonTurnedOnReducer;
