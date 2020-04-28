import { useState, useEffect } from "react";
import { capitalizeFirst } from "../../../util/Util";
import { strings } from "../../../strings/Strings";
import { getImage } from "./getImage";
import { addNewRecipe } from "../../../redux/myRecipes/addMyRecipe/thunk/addNewRecipeThunk";
import {
  addMyRecipe,
  editMyRecipe,
} from "../../../redux/myRecipes/retrieveMyRecipes/thunk/retrieveMyRecipesThunk";
import { toEditMyRecipeClearState } from "../../../redux/myRecipes/toEditMyRecipe/thunk/toEditMyRecipeThunk";
import { useSelector, useDispatch } from "react-redux";

const useNewRecipeForm = () => {
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({});
  const [error, setError] = useState({});

  const { userData } = useSelector((state) => state.login);
  const { newRecipeAdded } = useSelector((state) => state.addNewRecipe);
  const { myRecipeToEdit } = useSelector((state) => state.toEditMyRecipe);

  const handleInputsChange = (e) => {
    e.persist();
    setInputs((inputs) => ({
      ...inputs,
      [e.target.name]:
        e.target.name === strings.myRecipes.inputName.TITLE
          ? capitalizeFirst(e.target.value)
          : e.target.name === strings.myRecipes.inputName.COOK_TIME
          ? parseInt(e.target.value) > 300
            ? (e.target.value = "300")
            : e.target.value[0] === "0"
            ? (e.target.value = "1")
            : e.target.value.replace(/[^0-9]+/g, "")
          : e.target.name === strings.myRecipes.inputName.INGREDIENTS
          ? e.target.value.replace(/[^a-zA-Z,\d\s]/g, "").split(/\s*,\s*/)
          : e.target.name === strings.myRecipes.inputName.DESCRIPTION
          ? capitalizeFirst(e.target.value)
          : e.target.value,
    }));
  };

  const handlePicture = (picture) => {
    if (picture.length > 1) {
      picture = picture.splice(picture.length - 1, 1);
    }
    if (picture[0].size > 100000) {
      setError((error) => ({
        ...error,
        imageError: capitalizeFirst(strings.myRecipes.error.IMAGE_SIZE_ERROR),
      }));
    } else {
      setError((error) =>
        (({ imageError, ...others }) => ({
          ...others,
        }))(error)
      );
    }

    const fileReader = new FileReader();
    fileReader.readAsDataURL(picture[0]);
    fileReader.onloadend = () => {
      setInputs((inputs) => ({
        ...inputs,
        recipeImage: {
          image: fileReader.result,
          imageName: picture[0].name,
        },
      }));
    };
  };

  const handleRemoveImage = () => {
    setInputs((inputs) =>
      (({ recipeImage, ...others }) => ({
        ...others,
      }))(inputs)
    );
    if (error.imageError) {
      setError((error) =>
        (({ imageError, ...others }) => ({
          ...others,
        }))(error)
      );
    }
  };

  const handleRemoveVideo = () => {
    setInputs((inputs) =>
      (({ video, ...others }) => ({
        ...others,
      }))(inputs)
    );
    if (error.playerError) {
      setError((error) =>
        (({ playerError, ...others }) => ({
          ...others,
        }))(error)
      );
    }
  };

  const handlePlayerError = (e) => {
    if (e.target.error.message.includes("COULD_NOT_OPEN")) {
      setError((error) => ({
        ...error,
        playerError: capitalizeFirst(strings.myRecipes.error.VIDEO_URL_ERROR),
      }));
    }
  };

  const handlePlayerReady = (e) => {
    if (e.player.isReady) {
      setError((error) =>
        (({ playerError, ...others }) => ({
          ...others,
        }))(error)
      );
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (myRecipeToEdit.recipeTitle) {
      dispatch(
        editMyRecipe(
          myRecipeToEdit.recipeId,
          inputs.title,
          inputs.recipeImage,
          inputs.video,
          inputs.category,
          parseInt(inputs.cookTime),
          inputs.ingredients.filter((ingredient) => ingredient !== ""),
          inputs.description,
          userData.email
        )
      );
    } else {
      dispatch(
        addMyRecipe(
          inputs.title,
          inputs.recipeImage,
          inputs.video,
          inputs.category,
          parseInt(inputs.cookTime),
          inputs.ingredients.filter((ingredient) => ingredient !== ""),
          inputs.description,
          userData.email
        )
      );
    }
  };

  useEffect(() => {
    if (myRecipeToEdit.recipeTitle) {
      (async () => {
        const result =
          myRecipeToEdit.recipeImage &&
          (await getImage(myRecipeToEdit.recipeImage));
        setInputs((inputs) => ({
          ...inputs,
          title: myRecipeToEdit.recipeTitle,
          recipeImage: result && {
            image: result.imageBinary,
            imageName: result.pictureName,
          },
          video: myRecipeToEdit.recipeVideo,
          category: myRecipeToEdit.recipeCategory,
          cookTime: myRecipeToEdit.recipeCookTime,
          ingredients: myRecipeToEdit.recipeIngredients,
          description: myRecipeToEdit.recipeDescription,
        }));
        if (result === null)
          setInputs((inputs) =>
            (({ recipeImage, ...others }) => ({
              ...others,
            }))(inputs)
          );
      })();
    }
  }, [myRecipeToEdit]);

  useEffect(() => {
    if (newRecipeAdded) {
      setInputs({});
      dispatch(toEditMyRecipeClearState());
    }
    return () => dispatch(addNewRecipe(false));
  }, [newRecipeAdded, dispatch]);

  useEffect(() => {
    if (!inputs.video && !myRecipeToEdit.recipeVideo) {
      setInputs((inputs) =>
        (({ video, ...others }) => ({
          ...others,
        }))(inputs)
      );
      setError((error) =>
        (({ playerError, ...others }) => ({
          ...others,
        }))(error)
      );
    }
  }, [inputs.video, myRecipeToEdit.recipeVideo]);

  return {
    inputs,
    error,
    handleInputsChange,
    handlePicture,
    handleRemoveImage,
    handleRemoveVideo,
    handlePlayerError,
    handlePlayerReady,
    handleSubmit,
  };
};

export default useNewRecipeForm;
