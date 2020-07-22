import { socketDataCases } from "../../../config/cases/Cases";

const initialState = {
  userSocketData: {},
};

const getSocketDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case socketDataCases.SOCKET_DATA_RETRIEVED:
      return { ...state, userSocketData: action.payload };
    case socketDataCases.CLEAR_STATE:
      return (state = initialState);
    default:
      return state;
  }
};

export default getSocketDataReducer;
