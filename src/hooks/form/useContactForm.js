import { useState } from "react";

const useContactForm = () => {
  const [inputs, setInputs] = useState({});

  const handleInputChange = e => {
    e.persist();
    setInputs(inputs => ({ ...inputs, [e.target.name]: e.target.value }));
    console.log(`${inputs.subject}`);
    console.log(`${inputs.message}`);
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log("submitted");
    setInputs({});
    console.log(`${inputs.subject}`);
    console.log(`${inputs.message}`);
  };

  return { inputs, handleInputChange, handleSubmit };
};

export default useContactForm;
