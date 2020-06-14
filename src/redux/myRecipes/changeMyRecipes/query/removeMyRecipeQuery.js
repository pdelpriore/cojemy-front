export const removeMyRecipeQuery = (recipeId, userId, email) => {
  return {
    query: `mutation($recipeId: ID!, $userId: ID!, $email: String!) {
      removeMyRecipe(recipeId: $recipeId, userId: $userId, email: $email)
    }`,
    variables: {
      recipeId,
      userId,
      email,
    },
  };
};
