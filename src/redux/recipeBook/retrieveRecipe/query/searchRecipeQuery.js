export const searchRecipeQuery = (recipeTitle, email) => {
  return {
    query: `
                query {
                  searchRecipe(recipeTitle: "${recipeTitle}", email: "${email}") {
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
                          googlePhoto
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
