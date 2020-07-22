export const disconnectIOSocket = (ioSocket, userId) => {
  return new Promise((resolve) => {
    ioSocket.emit("disconnected", {
      userId: userId,
    });
    ioSocket.on("userDisconnected", (response) => {
      if (response) {
        ioSocket.disconnect();
        resolve();
      }
    });
  });
};
