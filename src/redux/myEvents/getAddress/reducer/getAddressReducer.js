import { getAddressCases } from "../../../config/cases/Cases";

const initialState = {
  loadingAddresses: false,
  addressesRetrieved: [],
  addressesRetrievedError: null,
};

const getAddressReducer = (state = initialState, action) => {
  switch (action.type) {
    case getAddressCases.LOADING:
      return { ...state, loadingAddresses: action.payload };
    case getAddressCases.ADDRESSES_RETRIEVED:
      return {
        ...state,
        ...initialState,
        addressesRetrieved: action.payload,
      };
    case getAddressCases.ERROR:
      return {
        ...state,
        ...initialState,
        addressesRetrievedError: action.payload,
      };
    case getAddressCases.CLEAR_STATE:
      return (state = initialState);
    default:
      return state;
  }
};

export default getAddressReducer;
