import React from "react";
import { ListGroup } from "react-bootstrap";
import Recipient from "./Recipient";
import { chooseRecipient } from "../../../redux/mails/chooseRecipient/thunk/chooseRecipientThunk";
import { useDispatch, useSelector } from "react-redux";

const RecipientSuggestions = ({ recipients }) => {
  const dispatch = useDispatch();

  const { messages } = useSelector((state) => state.userMessages);
  const messageRecipientIds = messages.map((message) => message.recipient._id);
  const messageSenderIds = messages.map((message) => message.sender._id);

  return (
    recipients &&
    recipients.length > 0 &&
    recipients.map((recipient, index) => (
      <div key={index} className="recipient-suggestions-box">
        <ListGroup variant="flush">
          {messageRecipientIds.length > 0 &&
          (messageRecipientIds.some((element) =>
            recipient._id.includes(element)
          ) ||
            messageSenderIds.some((element) =>
              recipient._id.includes(element)
            )) ? (
            <ListGroup.Item
              onClick={(e) => {
                e.preventDefault();
              }}
              className="suggestion-item-inactive"
            >
              <Recipient recipient={recipient} />
            </ListGroup.Item>
          ) : (
            <ListGroup.Item
              onClick={(e) => {
                e.preventDefault();
                dispatch(chooseRecipient(recipient));
              }}
              className="suggestion-item"
            >
              <Recipient recipient={recipient} />
            </ListGroup.Item>
          )}
        </ListGroup>
      </div>
    ))
  );
};

export default RecipientSuggestions;
