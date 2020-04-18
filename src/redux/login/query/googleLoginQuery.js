export const googleLoginQuery = (email) => {
  return {
    query: `
            mutation($email: String!) {
                loginGoogleUser(email: $email) {
                    _id
                    name
                    photo
                    googlePhoto
                    email
                    isGoogleUser
                }
            }
            `,
    variables: { email },
  };
};
