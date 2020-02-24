import { useState } from "react";

const useSignupForm = () => {
  const [inputs, setInputs] = useState({});

  const handleInputChange = e => {
    e.persist();
    setInputs(inputs => ({
      ...inputs,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setInputs({});
  };

  return { inputs, handleInputChange, handleSubmit };
};

export default useSignupForm;
