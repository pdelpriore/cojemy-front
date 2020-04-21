export const removeRateAndCommentQuery = (
  rateId,
  commentId,
  recipeId,
  commentItemId,
  email
) => {
  return {
    query: `
                    mutation($rateId: ID!, $commentId: ID!, $recipeId: ID!, $commentItemId: ID!, $email: String!) {
                      removeRecipeRateComment(rateId: $rateId, commentId: $commentId, recipeId: $recipeId, commentItemId: $commentItemId, email: $email) {
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
    variables: { rateId, commentId, recipeId, commentItemId, email },
  };
};
