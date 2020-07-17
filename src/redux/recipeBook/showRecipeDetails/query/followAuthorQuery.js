export const followAuthorQuery = (authorId, recipeId, userId, email) => {
  return {
    query: `
                      mutation($authorId: ID!, $recipeId: ID!, $userId: ID!, $email: String!) {
                        followAuthorRecipe(authorId: $authorId, recipeId: $recipeId, userId: $userId, email: $email) {
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
    variables: { authorId, recipeId, userId, email },
  };
};
