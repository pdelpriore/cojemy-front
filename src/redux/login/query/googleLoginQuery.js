export const googleLoginQuery = (email) => {
  return {
    query: `
            mutation($email: String!) {
                loginGoogleUser(email: $email) {
                    _id
                    name
                    photo
                    email
                    isGoogleUser
                }
            }
            `,
    variables: { email },
  };
};
