export const googleLoginQuery = (email) => {
  return {
    query: `
            mutation {
                loginGoogleUser(email: "${email}") {
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
