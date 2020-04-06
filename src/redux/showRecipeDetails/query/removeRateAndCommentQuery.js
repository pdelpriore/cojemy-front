export const removeRateAndCommentQuery = (
  rateId,
  commentId,
  recipeId,
  commentItemId,
  email
) => {
  return {
    query: `
                    mutation {
                      removeRecipeRateComment(rateId: "${rateId}", commentId: "${commentId}", recipeId: "${recipeId}", commentItemId: "${commentItemId}", email: "${email}") {
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
