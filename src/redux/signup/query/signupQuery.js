export const signupQuery = (name, email, confirmEmail, password) => {
  return {
    query: `
        mutation($name: String!, $email: String!, $confirmEmail: String!, $password: String!) {
            signUp(name: $name, email: $email, confirmEmail: $confirmEmail, password: $password) {
                email
            }
        }
        `,
    variables: { name, email, confirmEmail, password },
  };
};
