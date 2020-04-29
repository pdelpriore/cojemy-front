export const removeMyRecipeQuery = (recipeId, email) => {
  return {
    query: `mutation($recipeId: ID!, $email: String!) {
      removeMyRecipe(recipeId: $recipeId, email: $email) {
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
    }`,
    variables: {
      recipeId,
      email,
    },
  };
};
