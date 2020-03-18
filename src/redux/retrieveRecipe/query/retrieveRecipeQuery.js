export const retrieveRecipeQuery = (category, email) => {
  return {
    query: `
              query {
                retrieveRecipes(category: "${category}", email: "${email}") {
                    title
                    picture
                    date
                    category
                    cookTime
                    author {
                        name
                    }
                }
              }
              `
  };
};
