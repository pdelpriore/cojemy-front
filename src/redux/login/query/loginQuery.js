export const loginQuery = (email, password) => {
  return {
    query: `
          mutation($email: String!, $password: String!) {
              login(email: $email, password: $password) {
                  _id
                  name
                  photo
                  googlePhoto
                  email
                  isGoogleUser
              }
          }
          `,
    variables: { email, password },
  };
};
