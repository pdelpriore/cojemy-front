import { ioConnectCases } from "../../../config/cases/Cases";
import socketClient from "socket.io-client";
import { strings } from "../../../../strings/Strings";

export const ioConnect = (userId, userEmail) => {
  return (dispatch, getState) => {
    const socket = socketClient(strings.path.SERVER_PATH, {
      query: { userId: userId, userEmail: userEmail },
    });
    socket.on("id", (id) => {
      dispatch({ type: ioConnectCases.iO_CONNECTED, payload: socket });
      socket.emit("userData", {
        userId: userId,
        userSocketId: id,
      });
    });
  };
};

export const ioConnectClearState = () => {
  return (dispatch, getState) => {
    dispatch({ type: ioConnectCases.CLEAR_STATE });
  };
};
