import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const useRemindPassForm = () => {
  const dispatch = useDispatch();
  //   const { userSignedup } = useSelector(state => state.signup);
  const { show } = useSelector(state => state.showRemindPass);
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
    // dispatch(
    //   signupUser(
    //     inputs.name,
    //     inputs.email,
    //     inputs.confirmEmail,
    //     inputs.password
    //   )
    // );
  };

  return {
    inputs,
    handleInputChange,
    handleSubmit
  };
};

export default useRemindPassForm;
