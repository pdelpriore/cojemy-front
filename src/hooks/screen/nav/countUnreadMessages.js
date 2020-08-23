export const countUnreadMessages = (messages, userData) => {
  return messages.filter(
    (message) =>
      !message.isRead &&
      ((userData._id === message.recipient._id &&
        userData._id !==
          message.conversations[message.conversations.length - 1].author._id) ||
        (userData._id === message.sender._id &&
          userData._id !==
            message.conversations[message.conversations.length - 1].author._id))
  ).length;
};
