export const retrieveRecipeQuery = (category, email, skip, limit) => {
  return {
    query: `
              query($category: String!, $email: String!, $skip: Int!, $limit: Int!) {
                retrieveRecipes(category: $category, email: $email, skip: $skip, limit: $limit) {
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
    variables: { category, email, skip, limit },
  };
};
