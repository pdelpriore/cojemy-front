import { socketDataCases } from "../../../config/cases/Cases";

export const getUserSocketData = (data) => {
  return (dispatch, getState) => {
    dispatch({ type: socketDataCases.SOCKET_DATA_RETRIEVED, payload: data });
  };
};

export const userSocketDataClearState = () => {
  return (dispatch, getState) => {
    dispatch({ type: socketDataCases.CLEAR_STATE });
  };
};
