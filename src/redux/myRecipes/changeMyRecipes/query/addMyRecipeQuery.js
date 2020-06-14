export const addMyRecipeQuery = (
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
    query: `mutation($title: String!, $recipeImage: RecipeImage, $video: String, $category: String!, $cookTime: Int!, $ingredients: [String!]!, $description: String!, $userId: ID!, $email: String!) {
    addMyRecipe(title: $title, recipeImage: $recipeImage, video: $video, category: $category, cookTime: $cookTime, ingredients: $ingredients, description: $description, userId: $userId, email: $email)
  }`,
    variables: {
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
