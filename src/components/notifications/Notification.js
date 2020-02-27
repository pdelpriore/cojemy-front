import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-regular-svg-icons";
import useNotification from "../../hooks/notifications/useNotification";
import "./notification.css";

const Notification = ({ notificationMessage }) => {
  const { notification, show } = useNotification(notificationMessage);

  return (
    show &&
    notification !== null &&
    notification !== undefined && (
      <div className="notification">
        <div className="notification-icon">
          <FontAwesomeIcon icon={faTimesCircle} />
        </div>
        <div className="notification-message">{notification}</div>
      </div>
    )
  );
};

export default Notification;
