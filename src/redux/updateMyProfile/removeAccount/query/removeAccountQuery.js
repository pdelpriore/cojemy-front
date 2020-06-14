export const removeAccountQuery = (userId, email) => {
  return {
    query: `
                mutation($userId: ID!, $email: String!) {
                    removeAccount(userId: $userId, email: $email)
                }
                `,
    variables: { userId, email },
  };
};
