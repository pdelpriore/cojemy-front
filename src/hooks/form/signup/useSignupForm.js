import { useState } from "react";

const useSignupForm = () => {
  const [inputs, setInputs] = useState({});

  const handleInputChange = e => {
    e.persist();
    setInputs(inputs => ({
      ...inputs,
      [e.target.name]: e.target.value
    }));
    console.log(`${inputs.name}`);
    console.log(`${inputs.email}`);
    console.log(`${inputs.confirmEmail}`);
    console.log(`${inputs.password}`);
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log("logging");
    setInputs({});
    console.log(`${inputs.email}`);
    console.log(`${inputs.password}`);
  };

  return { inputs, handleInputChange, handleSubmit };
};

export default useSignupForm;
