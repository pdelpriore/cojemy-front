import { useState } from "react";
import { capitalizeFirst } from "../../../util/Util";
import { strings } from "../../../strings/Strings";

const useNewRecipeForm = () => {
  const [inputs, setInputs] = useState({});

  const handleInputsChange = (e) => {
    e.persist();
    setInputs((inputs) => ({
      ...inputs,
      [e.target.name]:
        e.target.name === strings.myRecipes.inputName.TITLE
          ? capitalizeFirst(e.target.value)
          : e.target.name === strings.myRecipes.inputName.COOK_TIME
          ? e.target.value.replace(/[^1-9]+/g, "")
          : e.target.name === strings.myRecipes.inputName.INGREDIENTS
          ? e.target.value.replace(/[^a-zA-Z,\d\s]/g, "").split(/\s*,\s*/)
          : e.target.name === strings.myRecipes.inputName.DESCRIPTION
          ? capitalizeFirst(e.target.value)
          : e.target.value,
    }));
  };

  // dispatchuj ingredients stosujac filtrowanie:
  // splited.filter((item) => item !== "")

  //dispatchuj video testujac czy link zawiera http albo www

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

  return {
    inputs,
    handleInputsChange,
    handlePicture,
    handleRemoveImage,
    handleRemoveVideo,
  };
};

export default useNewRecipeForm;
