export const loginQuery = (email, password) => {
  return {
    query: `
          mutation {
              login(email: "${email}", password: "${password}") {
                  name
                  email
              }
          }
          `
  };
};
