import React from "react";
import { ListGroup } from "react-bootstrap";
import Recipient from "./Recipient";
import { chooseRecipient } from "../../../redux/mails/chooseRecipient/thunk/chooseRecipientThunk";
import { useDispatch } from "react-redux";

const RecipientSuggestions = ({ recipients }) => {
  const dispatch = useDispatch();
  return (
    recipients &&
    recipients.length > 0 &&
    recipients.map((recipient, index) => (
      <div key={index} className="recipient-suggestions-box">
        <ListGroup variant="flush">
          <ListGroup.Item
            onClick={(e) => {
              e.preventDefault();
              dispatch(chooseRecipient(recipient));
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
