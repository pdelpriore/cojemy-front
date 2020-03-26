export const addRateAndCommentQuery = (
  recipeId,
  rateValue,
  commentContent,
  email
) => {
  return {
    query: `
                mutation {
                  addRecipeRateComment(recipeId: "${recipeId}" rateValue: ${rateValue}, commentContent: "${commentContent}" , email: "${email}") {
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
