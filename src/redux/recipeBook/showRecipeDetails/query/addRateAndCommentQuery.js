export const addRateAndCommentQuery = (
  recipeId,
  rateValue,
  commentContent,
  email
) => {
  return {
    query: `
                mutation($recipeId: ID!, $rateValue: Int!, $commentContent: String!, $email: String!) {
                  addRecipeRateComment(recipeId: $recipeId, rateValue: $rateValue, commentContent: $commentContent, email: $email) {
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
    variables: { recipeId, rateValue, commentContent, email },
  };
};
