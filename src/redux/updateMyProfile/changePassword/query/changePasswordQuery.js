export const changePasswordQuery = (
  currentPass,
  newPass,
  confirmPass,
  userId,
  email
) => {
  return {
    query: `
              mutation($currentPass: String!, $newPass: String!, $confirmPass: String!, $userId: ID!, $email: String!) {
                  changeUserPassword(currentPass: $currentPass, newPass: $newPass, confirmPass: $confirmPass, userId: $userId, email: $email)
              }
              `,
    variables: { currentPass, newPass, confirmPass, userId, email },
  };
};
