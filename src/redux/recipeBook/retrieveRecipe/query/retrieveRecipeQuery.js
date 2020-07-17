export const retrieveRecipeQuery = (category, userId, email, skip, limit) => {
  return {
    query: `
              query($category: String!, $userId: ID!, $email: String!, $skip: Int!, $limit: Int!) {
                retrieveRecipes(category: $category, userId: $userId, email: $email, skip: $skip, limit: $limit) {
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
    variables: { category, userId, email, skip, limit },
  };
};
