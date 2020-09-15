import { useState, useEffect } from "react";
import { capitalizeFirst } from "../../../util/Util";
import { strings } from "../../../strings/Strings";
import { unacceptableWordsArray } from "../../../shared/testWordsArray";
import { getImage } from "../../../shared/getImage";
import { makeImageBinary } from "../../../shared/makeImageBinary";
import {
  addMyRecipe,
  editMyRecipe,
  changeMyRecipesClearState,
} from "../../../redux/myRecipes/changeMyRecipes/thunk/changeMyRecipesThunk";
import { showEmojis } from "../../../redux/emoji/showEmojis/thunk/showEmojisThunk";
import { toEditMyRecipeClearState } from "../../../redux/myRecipes/toEditMyRecipe/thunk/toEditMyRecipeThunk";
import { useSelector, useDispatch } from "react-redux";

const useNewRecipeForm = () => {
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({});
  const [error, setError] = useState({});
  const [loadingImage, setLoadingImage] = useState(false);
  const [inputHasFocus, setInputHasFocus] = useState("");

  const { userData } = useSelector((state) => state.login);
  const { recipeUpdated } = useSelector((state) => state.isMyRecipeChanged);
  const { myRecipeToEdit } = useSelector((state) => state.toEditMyRecipe);
  const { emojiCharacter } = useSelector((state) => state.selectedEmoji);

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

  const handlePicture = async (picture) => {
    try {
      if (picture.length > 0) {
        setLoadingImage(true);
        const result = await makeImageBinary(picture);
        if (result) {
          setLoadingImage(false);
          setInputs((inputs) => ({
            ...inputs,
            recipeImage: result,
          }));
          if (error.imageError) {
            setError((error) =>
              (({ imageError, ...others }) => ({
                ...others,
              }))(error)
            );
          }
        }
      }
    } catch (err) {
      if (err) {
        setLoadingImage(false);
        setError((error) => ({
          ...error,
          imageError: err,
        }));
      }
    }
  };

  const handleRemoveImage = (e) => {
    e.preventDefault();
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

  const handleRemoveVideo = (e) => {
    e.preventDefault();
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
  const handleFocus = (e) => {
    setInputHasFocus(e.target.name);
  };
  const handleBlur = (e) => {
    if (
      (e.relatedTarget &&
        e.relatedTarget.className &&
        !e.relatedTarget.className.includes("btn")) ||
      e.relatedTarget === null
    ) {
      setInputHasFocus("");
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
          userData._id,
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
          userData._id,
          userData.email
        )
      );
    }
  };

  useEffect(() => {
    if (emojiCharacter) {
      setInputs((inputs) => ({
        ...inputs,
        [inputHasFocus]: inputs[inputHasFocus].concat(emojiCharacter),
      }));
      dispatch(showEmojis(false));
    }
  }, [emojiCharacter, inputHasFocus, dispatch]);

  useEffect(() => {
    if (myRecipeToEdit.recipeTitle) {
      (async () => {
        setLoadingImage(true);
        const result =
          myRecipeToEdit.recipeImage &&
          (await getImage(myRecipeToEdit.recipeImage));
        if (result || result === null) setLoadingImage(false);
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
    if (recipeUpdated) {
      setInputs({});
      dispatch(changeMyRecipesClearState());
      dispatch(toEditMyRecipeClearState());
    }
    return () => {
      dispatch(toEditMyRecipeClearState());
    };
  }, [recipeUpdated, dispatch]);

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
    if (
      unacceptableWordsArray.some(
        (element) => inputs.video && inputs.video.includes(element)
      )
    ) {
      setError((error) => ({
        ...error,
        playerError: capitalizeFirst(
          strings.myRecipes.error.VIDEO_UNACCEPTABLE
        ),
      }));
    }
  }, [inputs.video, myRecipeToEdit.recipeVideo]);

  return {
    inputs,
    error,
    loadingImage,
    inputHasFocus,
    handleFocus,
    handleBlur,
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
