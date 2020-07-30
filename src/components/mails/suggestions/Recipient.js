import React from "react";
import { Image } from "react-bootstrap";
import { userGooglePhoto } from "../../../shared/testWordsArray";
import { strings } from "../../../strings/Strings";
import "./recipient.css";

const Recipient = ({ recipient }) => {
  return (
    <div className="recipient-box">
      <div className="recipient-photo-box">
        <Image
          className="recipient-photo"
          src={
            userGooglePhoto.some(
              (element) => recipient.photo && recipient.photo.includes(element)
            )
              ? recipient.photo
              : recipient.photo
              ? strings.path.IMAGE_REQUEST + recipient.photo
              : require("../../../assets/imgs/cookerret.png")
          }
          roundedCircle
        />
        <div
          className={
            recipient.isConnected ? "recipient-active" : "recipient-inactive"
          }
        ></div>
      </div>
      <div className="recipient-name">{recipient.name}</div>
    </div>
  );
};

export default Recipient;
