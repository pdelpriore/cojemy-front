import { useState } from "react";

const useSearchRecipe = () => {
  const [inputs, setInputs] = useState({});

  const handleInputChange = (e) => {
    e.persist();
    setInputs((inputs) => ({
      ...inputs,
      [e.target.name]: e.target.value,
    }));
  };
  return { inputs, handleInputChange };
};

export default useSearchRecipe;
