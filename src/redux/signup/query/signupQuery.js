export const signupQuery = (name, email, confirmEmail, password, date) => {
  return {
    query: `
        mutation($name: String!, $email: String!, $confirmEmail: String!, $password: String!, $date: Date!) {
            signUp(name: $name, email: $email, confirmEmail: $confirmEmail, password: $password, date: $date) {
                email
            }
        }
        `,
    variables: { name, email, confirmEmail, password, date },
  };
};
