import { selectEventAddressCases } from "../../../config/cases/Cases";

const initialState = {
  selectedAddress: {},
};

const selectEventAddressReducer = (state = initialState, action) => {
  switch (action.type) {
    case selectEventAddressCases.ADDRESS_SELECTED:
      return {
        ...state,
        ...initialState,
        selectedAddress: action.payload,
      };
    case selectEventAddressCases.CLEAR_STATE:
      return (state = initialState);
    default:
      return state;
  }
};

export default selectEventAddressReducer;
