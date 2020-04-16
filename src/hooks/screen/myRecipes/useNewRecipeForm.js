import { useState } from "react";
import { capitalizeFirst } from "../../../util/Util";

const useNewRecipeForm = () => {
  const [inputs, setInputs] = useState({});

  const handleInputsChange = (e) => {
    e.persist();
    setInputs((inputs) => ({
      ...inputs,
      [e.target.name]:
        e.target.name === "title"
          ? capitalizeFirst(e.target.value)
          : e.target.name === "ingredients"
          ? e.target.value.replace(/[^a-zA-Z,\d\s]/g, "").split(/\s*,\s*/)
          : e.target.name === "cookTime"
          ? e.target.value.replace(/[^1-9]+/g, "")
          : e.target.name === "description"
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
    setInputs((inputs) => delete inputs.recipeImage);
  };

  const handleRemoveVideo = () => {
    setInputs((inputs) => delete inputs.video);
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
