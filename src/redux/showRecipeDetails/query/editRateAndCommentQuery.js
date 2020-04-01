export const editRateAndCommentQuery = (
  recipeId,
  rateId,
  rateValue,
  commentId,
  commentContent,
  email
) => {
  return {
    query: `
                  mutation {
                    editRecipeRateComment(recipeId: "${recipeId}", rateId: "${rateId}", rateValue: ${rateValue}, commentId: "${commentId}", commentContent: "${commentContent}" , email: "${email}") {
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
