export const remindPasswordQuery = (email) => {
  return {
    query: `
            mutation($email: String!) {
                remindPassword(email: $email)
            }
            `,
    variables: { email },
  };
};
