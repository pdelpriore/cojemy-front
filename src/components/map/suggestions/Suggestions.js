import React from "react";
import { useSelector } from "react-redux";
import { ListGroup, Spinner } from "react-bootstrap";
import "./suggestions.css";

const Suggestions = () => {
  const { loadingAddresses, addressesRetrieved } = useSelector(
    (state) => state.addressSuggestions
  );

  return loadingAddresses ? (
    <div className="suggestions-box">
      <Spinner animation="border" size="sm" />
    </div>
  ) : addressesRetrieved.length > 0 ? (
    addressesRetrieved.map((suggestion) => (
      <div className="suggestions-box">
        <ListGroup variant="flush">
          <ListGroup.Item className="suggestion-item">
            {suggestion.label}
          </ListGroup.Item>
        </ListGroup>
      </div>
    ))
  ) : (
    <div className="suggestions-box">
      <p>no results</p>
    </div>
  );
};

export default Suggestions;
