import { toEditEventCases } from "../../../config/cases/Cases";

const initialState = {
  eventToEdit: {},
};

const toEditEventReducer = (state = initialState, action) => {
  switch (action.type) {
    case toEditEventCases.EVENT_TO_EDIT:
      return { ...state, eventToEdit: action.payload };
    case toEditEventCases.CLEAR_STATE:
      return (state = initialState);
    default:
      return state;
  }
};

export default toEditEventReducer;
