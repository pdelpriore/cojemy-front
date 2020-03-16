export const retrieveRecipeQuery = (category, email) => {
  return {
    query: `
              query {
                retrieveRecipes(category: "${category}", email: "${email}") {
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
