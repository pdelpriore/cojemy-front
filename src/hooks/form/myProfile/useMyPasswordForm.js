import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { showMyPasswordForm } from "../../../redux/login/updateMyProfile/showMyPassword/thunk/showMyPasswordThunk";

const useMyPasswordForm = () => {
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({});

  const handleOnChange = (e) => {
    e.persist();
    setInputs((inputs) => ({
      ...inputs,
      [e.target.name]: e.target.value,
    }));
  };
  const handleCancel = (e) => {
    e.preventDefault();
    setInputs({});
    dispatch(showMyPasswordForm(false));
  };

  return { inputs, handleCancel, handleOnChange };
};

export default useMyPasswordForm;
