export const searchRecipeQuery = (recipeTitle, email) => {
  return {
    query: `
                query($recipeTitle: String!, $email: String!) {
                  searchRecipe(recipeTitle: $recipeTitle, email: $email) {
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
                          photo
                          email
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
    variables: { recipeTitle, email },
  };
};
