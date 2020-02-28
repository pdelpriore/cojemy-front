export const customerContactQuery = (subject, email, content) => {
  return {
    query: `
          mutation {
              customerContact(subject: "${subject}", email: "${email}", content: "${content}")
          }
          `
  };
};
