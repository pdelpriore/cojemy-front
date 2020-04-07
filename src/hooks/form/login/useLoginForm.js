import { useState, useEffect } from "react";
import { loginUser } from "../../../redux/login/thunk/loginThunk";
import { useSelector, useDispatch } from "react-redux";

const useLoginForm = () => {
  const [inputs, setInputs] = useState({});
  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state.login);

  const handleInputChange = (e) => {
    e.persist();
    setInputs((inputs) => ({
      ...inputs,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(inputs.email, inputs.password));
  };

  useEffect(() => {
    setInputs({});
  }, [userData]);

  return { inputs, handleInputChange, handleSubmit };
};

export default useLoginForm;
