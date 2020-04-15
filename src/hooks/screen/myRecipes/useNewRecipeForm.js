import { useState } from "react";

const useNewRecipeForm = () => {
  const [inputs, setInputs] = useState({});

  const handleInputsChange = (e) => {
    e.persist();
    setInputs((inputs) => ({
      ...inputs,
      [e.target.name]: e.target.value,
    }));
  };
  const handlePicture = (picture) => {
    setInputs((inputs) => ({
      ...inputs,
      recipeImage: picture,
    }));
  };
  return { inputs, handleInputsChange, handlePicture };
};

export default useNewRecipeForm;
