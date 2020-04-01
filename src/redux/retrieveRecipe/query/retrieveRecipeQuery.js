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
                        _id
                        name
                        email
                        photo
                        googlePhoto
                      }
                      comment {
                        _id
                        content
                        date
                      }
                      rate {
                        _id
                        value
                      }
                    }
                }
              }
              `
  };
};
