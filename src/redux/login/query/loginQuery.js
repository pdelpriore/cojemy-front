export const loginQuery = (email, password) => {
  return {
    query: `
          mutation {
              login(email: "${email}", password: "${password}") {
                  name
                  photo
                  googlePhoto
                  email
                  isGoogleUser
              }
          }
          `,
  };
};
