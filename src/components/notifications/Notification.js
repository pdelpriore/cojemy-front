import React from "react";
import useNotification from "../../hooks/notifications/useNotification";

const Notification = ({ notificationMessage }) => {
  const { notification, show } = useNotification(notificationMessage);

  return show && <div>{notification}</div>;
};

export default Notification;
