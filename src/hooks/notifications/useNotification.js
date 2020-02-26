import { useState, useEffect } from "react";

const useNotification = notificationMessage => {
  const [notification, setNotification] = useState("");
  const [show, setShow] = useState(false);

  useEffect(() => {
    setNotification(notificationMessage);
  }, [notificationMessage]);

  useEffect(() => {
    setShow(true);
    const timer = setTimeout(() => {
      setShow(false);
      setNotification("");
    }, 3000);
    return () => clearTimeout(timer);
  }, [notification]);

  return {
    notification,
    show
  };
};

export default useNotification;
