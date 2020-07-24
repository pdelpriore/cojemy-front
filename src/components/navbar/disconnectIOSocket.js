export const disconnectIOSocket = (socket, userId) => {
  return new Promise((resolve) => {
    socket.emit("disconnected", {
      userId: userId,
    });
    socket.on("userDisconnected", (response) => {
      if (response) {
        socket.disconnect();
        resolve();
      }
    });
  });
};
