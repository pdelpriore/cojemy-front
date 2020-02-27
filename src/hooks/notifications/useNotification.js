import { useState, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { clearSignUpErrorState } from "../../redux/signup/thunk/SignupThunk";

const useNotification = notificationMessage => {
  const [notifications, setNotification] = useState({});
  const [show, setShow] = useState(false);

  useEffect(() => {
    setNotification(notifications => ({
      ...notifications,
      notification: notificationMessage
    }));
  }, [notificationMessage]);

  let { notification } = notifications;
  const dispatch = useDispatch();

  let clearSignupErrorState = useCallback(() => {
    return dispatch(clearSignUpErrorState());
  }, [dispatch]);

  useEffect(() => {
    setShow(true);
    const timer = setTimeout(() => {
      setShow(false);
      setNotification({});
      clearSignupErrorState();
    }, 3500);
    return () => clearTimeout(timer);
  }, [notification, clearSignupErrorState]);

  return {
    notification,
    show
  };
};

export default useNotification;
