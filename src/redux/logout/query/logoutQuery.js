export const logoutQuery = email => {
  return {
    query: `
            mutation {
                logout(email: "${email}")
            }
            `
  };
};
