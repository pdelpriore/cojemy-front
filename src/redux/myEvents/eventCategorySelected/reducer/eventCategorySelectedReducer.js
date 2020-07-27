import { eventCategorySelectedCases } from "../../../config/cases/Cases";

const initialState = {
  eventButtonId: 0,
};

const eventCategorySelectedReducer = (state = initialState, action) => {
  switch (action.type) {
    case eventCategorySelectedCases.BUTTON_ID_RETRIEVED:
      return { ...state, eventButtonId: action.payload };
    case eventCategorySelectedCases.CLEAR_STATE:
      return (state = initialState);
    default:
      return state;
  }
};

export default eventCategorySelectedReducer;
