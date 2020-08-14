export const sortConversationsByDate = (data) => {
  return data.conversations.sort((a, b) => (a.date > b.date ? 1 : -1));
};
