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

  const handlePicture = (picture) => {
    setInputs((inputs) => ({
      ...inputs,
      recipeImage: picture,
    }));
  };
  return { inputs, handleInputsChange, handlePicture };
};

export default useNewRecipeForm;
