export const googleLoginQuery = email => {
  return {
    query: `
            mutation {
                loginGoogleUser(email: "${email}") {
                    name
                    email
                    isGoogleUser
                }
            }
            `
  };
};
