import { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { signupUser } from "../../../apollo/queries/signupUser";

const useSignupForm = () => {
  const [inputs, setInputs] = useState({});
  const [signUp, { data }] = useMutation(signupUser);

  const handleInputChange = e => {
    e.persist();
    setInputs(inputs => ({
      ...inputs,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    signUp({
      variables: {
        name: inputs.name,
        email: inputs.email,
        password: inputs.password
      }
    });
    console.log(data);
    setInputs({});
  };

  return { inputs, handleInputChange, handleSubmit, data };
};

export default useSignupForm;
