export const retrieveMyRecipesQuery = (email) => {
  return {
    query: `
                query {
                  retrieveMyRecipes(email: "${email}") {
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
