export const googleSignupQuery = (name, email, photo, date) => {
  return {
    query: `
          mutation($name: String!, $email: String!, $photo: String, $date: Date!) {
            signUpGoogleUser(name: $name, email: $email, photo: $photo, date: $date) {
                email
              }
          }
          `,
    variables: {
      name,
      email,
      photo,
      date,
    },
  };
};
