import { useState } from "react";
import { signupUser } from "../../../redux/signup/thunk/SignupThunk";
import { useDispatch } from "react-redux";

const useSignupForm = () => {
  const dispatch = useDispatch();

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
    dispatch(
      signupUser(
        inputs.name,
        inputs.email,
        inputs.confirmEmail,
        inputs.password
      )
    );
    setInputs({});
  };

  return { inputs, handleInputChange, handleSubmit };
};

export default useSignupForm;
