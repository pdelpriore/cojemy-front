export const remindPasswordQuery = email => {
  return {
    query: `
            mutation {
                remindPassword(email: "${email}")
            }
            `
  };
};
