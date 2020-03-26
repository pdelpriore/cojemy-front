export const retrieveRecipeQuery = (category, email) => {
  return {
    query: `
              query {
                retrieveRecipes(category: "${category}", email: "${email}") {
                    _id
                    title
                    picture
                    date
                    category
                    cookTime
                    ingredients
                    description
                    author {
                        name
                    }
                    comments {
                      commentator {
                        name
                        email
                        photo
                        googlePhoto
                      }
                      comment {
                        content
                        date
                      }
                      rate {
                        value
                      }
                    }
                }
              }
              `
  };
};
