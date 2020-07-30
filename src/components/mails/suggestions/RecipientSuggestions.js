import React from "react";
import { ListGroup } from "react-bootstrap";

const RecipientSuggestions = ({ recipients }) => {
  return (
    recipients &&
    recipients.length > 0 &&
    recipients.map((recipient, index) => (
      <div key={index} className="suggestions-box">
        <ListGroup variant="flush">
          <ListGroup.Item
            onClick={(e) => {
              e.preventDefault();
            }}
            className="suggestion-item"
          >
            {recipient.name}
          </ListGroup.Item>
        </ListGroup>
      </div>
    ))
  );
};

export default RecipientSuggestions;
