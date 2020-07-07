import { clearOldEventsCases } from "../../../config/cases/Cases";

const initialState = {
  loadingClearOldEvents: false,
  oldEventsCleared: false,
  clearOldEventsError: null,
};

const clearOldEventsReducer = (state = initialState, action) => {
  switch (action.type) {
    case clearOldEventsCases.LOADING:
      return {
        ...state,
        ...initialState,
        loadingClearOldEvents: action.payload,
      };
    case clearOldEventsCases.OLD_EVENTS_CLEARED:
      return { ...state, ...initialState, oldEventsCleared: action.payload };
    case clearOldEventsCases.ERROR:
      return { ...state, ...initialState, eventChangeError: action.payload };
    case clearOldEventsCases.CLEAR_STATE:
      return (state = initialState);
    default:
      return state;
  }
};

export default clearOldEventsReducer;
