export const signupQuery = (name, email, confirmEmail, password) => {
  return {
    query: `
        mutation {
            signUp(name: "${name}", email: "${email}", confirmEmail: "${confirmEmail}", password: "${password}") {
                email
                isGoogleUser
            }
        }
        `
  };
};

export const googleSignupQuery = (name, email, photo) => {
  return {
    query: `
          mutation {
            signUpGoogleUser(name: "${name}", email: "${email}", googlePhoto: "${photo}") {
                email
                isGoogleUser
              }
          }
          `
  };
};
