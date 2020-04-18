export const logoutQuery = (email) => {
  return {
    query: `
            mutation($email: String!) {
                logout(email: $email)
            }
            `,
    variables: { email },
  };
};
