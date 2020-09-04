import { selectEventDateCases } from "../../../config/cases/Cases";

const initialState = {
  eventDate: null,
};

const selectEventDateReducer = (state = initialState, action) => {
  switch (action.type) {
    case selectEventDateCases.DATE_RETRIEVED:
      return { ...state, eventDate: action.payload };
    case selectEventDateCases.CLEAR_STATE:
      return (state = initialState);
    default:
      return state;
  }
};

export default selectEventDateReducer;
