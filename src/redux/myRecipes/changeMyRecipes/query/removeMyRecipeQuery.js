export const removeMyRecipeQuery = (recipeId, email) => {
  return {
    query: `mutation($recipeId: ID!, $email: String!) {
      removeMyRecipe(recipeId: $recipeId, email: $email)
    }`,
    variables: {
      recipeId,
      email,
    },
  };
};
