export const removeAccountQuery = (email) => {
  return {
    query: `
                mutation($email: String!) {
                    removeAccount(email: $email)
                }
                `,
    variables: { email },
  };
};
