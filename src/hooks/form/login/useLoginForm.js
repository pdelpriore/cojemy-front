import { useState } from "react";

const useLoginForm = () => {
  const [inputs, setInputs] = useState({});

  const handleInputChange = e => {
    e.persist();
    setInputs(inputs => ({
      ...inputs,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
  };

  return { inputs, handleInputChange, handleSubmit };
};

export default useLoginForm;
