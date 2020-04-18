export const googleSignupQuery = (name, email, photo) => {
  return {
    query: `
          mutation($name: String!, $email: String!, $photo: String!) {
            signUpGoogleUser(name: $name, email: $email, googlePhoto: $photo) {
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
