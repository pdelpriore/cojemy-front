import { useState, useEffect } from "react";
import { signupUser } from "../../../redux/signup/thunk/SignupThunk";
import { useDispatch, useSelector } from "react-redux";
import { strings } from "../../../strings/Strings";

const useSignupForm = () => {
  const dispatch = useDispatch();
  const { userSignedup } = useSelector((state) => state.signup);

  const [inputs, setInputs] = useState({});

  const handleInputChange = (e) => {
    e.persist();
    setInputs((inputs) => ({
      ...inputs,
      [e.target.name]:
        e.target.name === strings.signup.inputName.NAME
          ? e.target.value.replace(/\s/g, "")
          : e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      signupUser(
        inputs.name,
        inputs.email,
        inputs.confirmEmail,
        inputs.password
      )
    );
  };

  useEffect(() => {
    setInputs({});
  }, [userSignedup]);

  return { inputs, handleInputChange, handleSubmit };
};

export default useSignupForm;
