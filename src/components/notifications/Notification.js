import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimesCircle,
  faCheckCircle
} from "@fortawesome/free-regular-svg-icons";
import useNotification from "../../hooks/notifications/useNotification";
import { useSelector } from "react-redux";
import "./notification.css";

const Notification = ({ notificationMessage }) => {
  const { notification, show } = useNotification(notificationMessage);
  const { error } = useSelector(state => state.signup);

  return (
    show &&
    notification !== null &&
    notification !== undefined && (
      <div className="notification">
        {notification === error ? (
          <div className="notification-icon-error">
            <FontAwesomeIcon icon={faTimesCircle} />
          </div>
        ) : (
          <div className="notification-icon-success">
            <FontAwesomeIcon icon={faCheckCircle} />
          </div>
        )}
        {notification === error ? (
          <div className="notification-message">{notification}</div>
        ) : (
          <div className="notification-message-success">{notification}</div>
        )}
      </div>
    )
  );
};

export default Notification;
