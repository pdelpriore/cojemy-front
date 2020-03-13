export const retrieveRecipeQuery = (category, email, isUserGoogle) => {
  return {
    query: `
              query {
                retrieveRecipes(category: "${category}", email: "${email}", isGoogleUser: ${isUserGoogle}) {
                    title
                    date
                    category
                    author {
                        name
                    }
                }
              }
              `
  };
};
