import React from "react";
import { ListGroup } from "react-bootstrap";
import Recipient from "./Recipient";

const RecipientSuggestions = ({ recipients }) => {
  return (
    recipients &&
    recipients.length > 0 &&
    recipients.map((recipient, index) => (
      <div key={index} className="recipient-suggestions-box">
        <ListGroup variant="flush">
          <ListGroup.Item
            onClick={(e) => {
              e.preventDefault();
            }}
            className="suggestion-item"
          >
            <Recipient recipient={recipient} />
          </ListGroup.Item>
        </ListGroup>
      </div>
    ))
  );
};

export default RecipientSuggestions;
