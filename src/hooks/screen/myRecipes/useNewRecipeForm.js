import { useState, useEffect } from "react";
import { capitalizeFirst } from "../../../util/Util";
import { strings } from "../../../strings/Strings";

const useNewRecipeForm = () => {
  const [inputs, setInputs] = useState({});
  const [error, setError] = useState("");

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

  // dispatchuj ingredients stosujac filtrowanie:
  // splited.filter((item) => item !== "")

  // dispatchuj video testujac czy link zawiera http albo www
  // dispatchuj video, jesli nie ma erroru

  // przy dispatchowaniu cookTime zrob parseInt poniewaz w bazie danych jest to Int

  const handlePicture = (picture) => {
    if (picture.length > 1) {
      picture = picture.splice(picture.length - 1, 1);
    }
    const fileReader = new FileReader();
    fileReader.readAsDataURL(picture[0]);
    fileReader.onloadend = () => {
      setInputs((inputs) => ({
        ...inputs,
        recipeImage: fileReader.result,
      }));
    };
  };

  const handleRemoveImage = () => {
    setInputs((inputs) =>
      (({ recipeImage, ...others }) => ({
        ...others,
      }))(inputs)
    );
  };

  const handleRemoveVideo = () => {
    setInputs((inputs) =>
      (({ video, ...others }) => ({
        ...others,
      }))(inputs)
    );
  };

  const handlePlayerError = (e) => {
    if (e.target.error.message.includes("COULD_NOT_OPEN")) {
      setError(capitalizeFirst(strings.myRecipes.error.VIDEO_URL_ERROR));
    }
  };

  const handlePlayerReady = (e) => {
    if (e.player.isReady) {
      setError("");
    }
  };

  useEffect(() => {
    if (!inputs.video) setError("");
  }, [inputs.video]);

  return {
    inputs,
    error,
    handleInputsChange,
    handlePicture,
    handleRemoveImage,
    handleRemoveVideo,
    handlePlayerError,
    handlePlayerReady,
  };
};

export default useNewRecipeForm;
