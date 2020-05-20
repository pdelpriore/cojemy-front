export const updateUserProfileQuery = (name, profileImage, email) => {
  return {
    query: `
            mutation($name: String!, $profileImage: ProfileImage, $email: String!) {
                updateUserProfile(name: $name, profileImage: $profileImage, email: $email) {
                    _id
                    name
                    photo
                    email
                    isGoogleUser
                }
            }
            `,
    variables: { name, profileImage, email },
  };
};
