export const googleLogoutQuery = email => {
  return {
    query: `
              mutation {
                logoutGoogleUser(email: "${email}")
              }
              `
  };
};
