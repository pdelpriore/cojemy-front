export const editMyRecipeQuery = (
  recipeId,
  title,
  image,
  imageName,
  video,
  category,
  cookTime,
  ingredients,
  description,
  email
) => {
  return {
    query: `mutation {
      editMyRecipe(recipeId: "${recipeId}" title: "${title}", recipeImage: {image: "${image}", imageName: "${imageName}"}, video: "${video}", category: "${category}", cookTime: ${cookTime}, ingredients: "${ingredients}", description: "${description}", email: "${email}") {
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
  };
};
