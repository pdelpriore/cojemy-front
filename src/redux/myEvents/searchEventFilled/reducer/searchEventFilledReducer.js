import { searchEventFilledCases } from "../../../config/cases/Cases";

const initialState = {
  searchEventFilled: false,
};

const searchEventFilledReducer = (state = initialState, action) => {
  switch (action.type) {
    case searchEventFilledCases.FORM_FILLED:
      return {
        ...state,
        searchEventFilled: action.payload,
      };
    default:
      return state;
  }
};

export default searchEventFilledReducer;
