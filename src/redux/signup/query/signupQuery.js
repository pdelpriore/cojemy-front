export const signupQuery = (name, email, confirmEmail, password) => {
  return {
    query: `
        mutation {
            signUp(name: "${name}", email: "${email}", confirmEmail: "${confirmEmail}", password: "${password}") {
                email
            }
        }
        `
  };
};
