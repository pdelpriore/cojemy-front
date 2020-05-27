export const changePasswordQuery = (
  currentPass,
  newPass,
  confirmPass,
  email
) => {
  return {
    query: `
              mutation($currentPass: String!, $newPass: String!, $confirmPass: String!, $email: String!) {
                  changeUserPassword(currentPass: $currentPass, newPass: $newPass, confirmPass: $confirmPass, email: $email)
              }
              `,
    variables: { currentPass, newPass, confirmPass, email },
  };
};
