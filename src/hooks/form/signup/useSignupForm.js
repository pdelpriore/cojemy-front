import { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { SIGNUP_USER } from "../../../apollo/queries/signupUser";

const useSignupForm = () => {
  const [inputs, setInputs] = useState({});
  const [signUp, { data, error, loading }] = useMutation(SIGNUP_USER);

  const handleInputChange = e => {
    e.persist();
    setInputs(inputs => ({
      ...inputs,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    signUp({
      variables: {
        name: inputs.name,
        email: inputs.email,
        password: inputs.password
      }
    });
    setInputs({});
  };

  return { inputs, handleInputChange, handleSubmit, data };
};

export default useSignupForm;
