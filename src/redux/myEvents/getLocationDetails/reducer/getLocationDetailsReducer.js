import { getLocationDetailsCases } from "../../../config/cases/Cases";

const initialState = {
  loadingLocationDetails: false,
  locationDetailsRetrieved: {},
  locationDetailsError: null,
};

const getLocationDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case getLocationDetailsCases.LOADING:
      return { ...state, loadingLocationDetails: action.payload };
    case getLocationDetailsCases.LOCATION_DETAILS_RETRIEVED:
      return {
        ...state,
        ...initialState,
        locationDetailsRetrieved: action.payload,
      };
    case getLocationDetailsCases.ERROR:
      return {
        ...state,
        ...initialState,
        locationDetailsError: action.payload,
      };
    case getLocationDetailsCases.CLEAR_STATE:
      return (state = initialState);
    default:
      return state;
  }
};

export default getLocationDetailsReducer;
