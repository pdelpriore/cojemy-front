export const retrieveRecipeQuery = (category, email) => {
  return {
    query: `
              query {
                retrieveRecipes(category: "${category}", email: "${email}") {
                    _id
                    title
                    picture
                    video
                    date
                    category
                    cookTime
                    ingredients
                    description
                    author {
                        name
                    }
                    comments {
                      _id
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
              `,
  };
};
