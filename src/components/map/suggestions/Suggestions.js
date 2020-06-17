import React from "react";
import { useSelector } from "react-redux";
import { ListGroup, Spinner } from "react-bootstrap";
import "./suggestions.css";

const Suggestions = () => {
  const { addressesRetrieved } = useSelector(
    (state) => state.addressSuggestions
  );

  return addressesRetrieved.length > 0 ? (
    addressesRetrieved.map((suggestion, index) => (
      <div key={index} className="suggestions-box">
        <ListGroup variant="flush">
          <ListGroup.Item className="suggestion-item">
            {suggestion.label}
          </ListGroup.Item>
        </ListGroup>
      </div>
    ))
  ) : (
    <div className="suggestions-box">
      <p className="suggestion-item no-result">no results</p>
    </div>
  );
};

export default Suggestions;
