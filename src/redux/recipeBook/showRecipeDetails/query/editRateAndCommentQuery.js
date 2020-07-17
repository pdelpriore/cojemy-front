export const editRateAndCommentQuery = (
  recipeId,
  rateId,
  rateValue,
  commentId,
  commentContent,
  userId,
  email
) => {
  return {
    query: `
                  mutation {
                    editRecipeRateComment(recipeId: "${recipeId}", rateId: "${rateId}", rateValue: ${rateValue}, commentId: "${commentId}", commentContent: "${commentContent}", userId: "${userId}", email: "${email}") {
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
  };
};
