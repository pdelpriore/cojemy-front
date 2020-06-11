export const logoutQuery = (userId, email) => {
  return {
    query: `
            mutation($userId: ID!, $email: String!) {
                logout(userId: $userId, email: $email)
            }
            `,
    variables: { userId, email },
  };
};
