import { turnOffRecipeButtonsCases } from "../../../config/cases/Cases";

const initialState = {
  searchInputFilled: false,
};

const turnOffRecipeButtonsReducer = (state = initialState, action) => {
  switch (action.type) {
    case turnOffRecipeButtonsCases.SEARCH_INPUT_FILLED:
      return { ...state, searchInputFilled: action.payload };
    default:
      return state;
  }
};

export default turnOffRecipeButtonsReducer;
