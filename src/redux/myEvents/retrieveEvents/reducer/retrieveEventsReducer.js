import { retrieveEventsCases } from "../../../config/cases/Cases";

const initialState = {
  loadingEvents: false,
  eventsRetrieved: null,
  eventsError: null,
};

const retrieveEventsReducer = (state = initialState, action) => {
  switch (action.type) {
    case retrieveEventsCases.LOADING:
      return { ...state, loadingEvents: action.payload };
    case retrieveEventsCases.EVENTS_RETRIEVED:
      return {
        ...state,
        ...initialState,
        eventsRetrieved: action.payload,
      };
    case retrieveEventsCases.ERROR:
      return {
        ...state,
        ...initialState,
        eventsError: action.payload,
      };
    case retrieveEventsCases.CLEAR_STATE:
      return (state = initialState);
    default:
      return state;
  }
};

export default retrieveEventsReducer;
