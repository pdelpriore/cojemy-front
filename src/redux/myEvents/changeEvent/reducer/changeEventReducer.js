import { changeEventCases } from "../../../config/cases/Cases";

const initialState = {
  loadingEventUpdating: false,
  eventUpdated: false,
  eventChangeError: null,
};

const changeEventReducer = (state = initialState, action) => {
  switch (action.type) {
    case changeEventCases.LOADING:
      return {
        ...state,
        ...initialState,
        loadingEventUpdating: action.payload,
      };
    case changeEventCases.EVENT_CHANGED:
      return { ...state, ...initialState, eventUpdated: action.payload };
    case changeEventCases.ERROR:
      return { ...state, ...initialState, eventChangeError: action.payload };
    case changeEventCases.CLEAR_STATE:
      return (state = initialState);
    default:
      return state;
  }
};

export default changeEventReducer;
