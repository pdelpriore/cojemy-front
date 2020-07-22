import { ioConnectCases } from "../../../config/cases/Cases";

const initialState = {
  ioSocket: {},
};

const ioConnectReducer = (state = initialState, action) => {
  switch (action.type) {
    case ioConnectCases.iO_CONNECTED:
      return { ...state, ioSocket: action.payload };
    case ioConnectCases.CLEAR_STATE:
      return (state = initialState);
    default:
      return state;
  }
};

export default ioConnectReducer;
