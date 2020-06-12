export const updateUserProfileQuery = (name, profileImage, userId, email) => {
  return {
    query: `
            mutation($name: String!, $profileImage: ProfileImage, $userId: ID!, $email: String!) {
                updateUserProfile(name: $name, profileImage: $profileImage, userId: $userId, email: $email) {
                    _id
                    name
                    photo
                    email
                    isGoogleUser
                }
            }
            `,
    variables: { name, profileImage, userId, email },
  };
};
