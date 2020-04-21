export const retrieveRecipeQuery = (category, email) => {
  return {
    query: `
              query($category: String!, $email: String!) {
                retrieveRecipes(category: $category, email: $email) {
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
    variables: { category, email },
  };
};
