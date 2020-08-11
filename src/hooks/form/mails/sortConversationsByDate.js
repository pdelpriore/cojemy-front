export const sortConversationsByDate = (conversations) => {
  return conversations.sort((a, b) => (a.date > b.date ? 1 : -1));
};
