export const customerContactQuery = (subject, email, content) => {
  return {
    query: `
          mutation($subject: String!, $email: String!, $content: String!) {
              customerContact(subject: $subject, email: $email, content: $content)
          }
          `,
    variables: {
      subject,
      email,
      content,
    },
  };
};
