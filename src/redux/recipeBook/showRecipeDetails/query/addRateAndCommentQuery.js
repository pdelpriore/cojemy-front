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
  };
};
