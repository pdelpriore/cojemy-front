export const editMyRecipeQuery = (
  recipeId,
  title,
  recipeImage,
  video,
  category,
  cookTime,
  ingredients,
  description,
  userId,
  email
) => {
  return {
    query: `mutation($recipeId: ID!, $title: String!, $recipeImage: RecipeImage, $video: String, $category: String!, $cookTime: Int!, $ingredients: [String!]!, $description: String!, $userId: ID!, $email: String!) {
      editMyRecipe(recipeId: $recipeId, title: $title, recipeImage: $recipeImage, video: $video, category: $category, cookTime: $cookTime, ingredients: $ingredients, description: $description, userId: $userId, email: $email)
    }`,
    variables: {
      recipeId,
      title,
      recipeImage,
      video,
      category,
      cookTime,
      ingredients,
      description,
      userId,
      email,
    },
  };
};
