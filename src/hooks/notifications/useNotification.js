import { useState, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { clearSignUpState } from "../../redux/signup/thunk/SignupThunk";
import { clearCustomerContactState } from "../../redux/customerContact/thunk/customerContactThunk";

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

  let clearSignupState = useCallback(() => {
    return dispatch(clearSignUpState());
  }, [dispatch]);

  let clearCustomerState = useCallback(() => {
    return dispatch(clearCustomerContactState());
  }, [dispatch]);

  useEffect(() => {
    setShow(true);
    const timer = setTimeout(() => {
      setShow(false);
      setNotification({});
      clearSignupState();
      clearCustomerState();
    }, 3500);
    return () => clearTimeout(timer);
  }, [notification, clearSignupState, clearCustomerState]);

  return {
    notification,
    show
  };
};

export default useNotification;
