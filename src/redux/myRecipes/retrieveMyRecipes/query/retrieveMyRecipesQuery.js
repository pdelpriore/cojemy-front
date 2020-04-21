export const retrieveMyRecipesQuery = (email) => {
  return {
    query: `
                query($email: String!) {
                  retrieveMyRecipes(email: $email) {
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
    variables: { email },
  };
};
