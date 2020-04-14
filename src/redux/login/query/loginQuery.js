export const loginQuery = (email, password) => {
  return {
    query: `
          mutation {
              login(email: "${email}", password: "${password}") {
                  _id
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
