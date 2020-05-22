import { newRecipeErrorCases } from "../../../config/cases/Cases";

const initialState = {
  myRecipeErrorReceived: null,
};

const myRecipeErrorReducer = (state = initialState, action) => {
  switch (action.type) {
    case newRecipeErrorCases.ERROR_RECEIVED:
      return {
        ...state,
        myRecipeErrorReceived: action.payload,
      };
    case newRecipeErrorCases.CLEAR_STATE:
      return (state = initialState);
    default:
      return state;
  }
};

export default myRecipeErrorReducer;
