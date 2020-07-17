export const searchRecipeQuery = (recipeTitle, userId, email) => {
  return {
    query: `
                query($recipeTitle: String!, $userId: ID!, $email: String!) {
                  searchRecipe(recipeTitle: $recipeTitle, userId: $userId, email: $email) {
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
                        _id
                          name
                          photo
                          email
                          followers {
                            email
                          }
                      }
                      comments {
                        _id
                        commentator {
                          _id
                          name
                          email
                          photo
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
    variables: { recipeTitle, userId, email },
  };
};
