import { chooseEventAddressCases } from "../../../config/cases/Cases";

const initialState = {
  addressChosen: false,
};

const chooseEventAddressReducer = (state = initialState, action) => {
  switch (action.type) {
    case chooseEventAddressCases.ADDRESS_CHOSEN:
      return {
        ...state,
        addressChosen: action.payload,
      };
    default:
      return state;
  }
};

export default chooseEventAddressReducer;
