import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const useRemindPassForm = () => {
  const dispatch = useDispatch();
  //   const { userSignedup } = useSelector(state => state.signup);

  const [inputs, setInputs] = useState({});
  const [show, setShow] = useState(false);

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

  const showComponent = () => {
    setShow(true);
  };

  const hideComponent = () => {
    setShow(false);
  };

  console.log("show in hook: ", show);

  return {
    inputs,
    handleInputChange,
    handleSubmit,
    show,
    showComponent,
    hideComponent
  };
};

export default useRemindPassForm;
