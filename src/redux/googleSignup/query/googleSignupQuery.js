export const googleSignupQuery = (name, email, photo) => {
  return {
    query: `
          mutation($name: String!, $email: String!, $photo: String) {
            signUpGoogleUser(name: $name, email: $email, photo: $photo) {
                email
              }
          }
          `,
    variables: {
      name,
      email,
      photo,
    },
  };
};
