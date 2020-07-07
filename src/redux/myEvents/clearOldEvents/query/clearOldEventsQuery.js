export const clearOldEventsQuery = (userId, email) => {
  return {
    query: `mutation($userId: ID!, $email: String!) {
          clearOldEvents(userId: $userId, email: $email)
      }`,
    variables: {
      userId,
      email,
    },
  };
};
