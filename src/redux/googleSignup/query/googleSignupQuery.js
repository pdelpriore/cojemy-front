export const googleSignupQuery = (name, email, photo) => {
  return {
    query: `
          mutation {
            signUpGoogleUser(name: "${name}", email: "${email}", googlePhoto: "${photo}") {
                name  
                email
                isGoogleUser
              }
          }
          `
  };
};
