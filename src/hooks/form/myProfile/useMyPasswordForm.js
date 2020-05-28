import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeUserPassword } from "../../../redux/login/updateMyProfile/changePassword/thunk/changePasswordThunk";
import { showMyPasswordForm } from "../../../redux/login/updateMyProfile/showMyPassword/thunk/showMyPasswordThunk";

const useMyPasswordForm = () => {
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({});

  const { userData } = useSelector((state) => state.login);
  const { userPasswordChanged } = useSelector(
    (state) => state.isUserPasswordChanged
  );

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

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      changeUserPassword(
        inputs.currentPass,
        inputs.newPass,
        inputs.confirmPass,
        userData.email
      )
    );
  };

  useEffect(() => {
    if (userPasswordChanged) {
      setInputs({});
      dispatch(showMyPasswordForm(false));
    }
  }, [userPasswordChanged, dispatch]);

  return { inputs, handleCancel, handleOnChange, handleSubmit };
};

export default useMyPasswordForm;
