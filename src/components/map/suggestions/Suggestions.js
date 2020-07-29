import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectEventAddress } from "../../../redux/myEvents/selectEventAddress/thunk/selectEventAddressThunk";
import { chooseEventAddress } from "../../../redux/myEvents/chooseEventAddress/thunk/chooseEventAddressThunk";
import { getLocationDetails } from "../../../redux/myEvents/getLocationDetails/thunk/getLocationDetailsThunk";
import { ListGroup } from "react-bootstrap";
import { strings } from "../../../strings/Strings";
import { capitalizeFirst } from "../../../util/Util";
import "./suggestions.css";

const Suggestions = () => {
  const dispatch = useDispatch();
  const { addressesRetrieved } = useSelector(
    (state) => state.addressSuggestions
  );

  useEffect(() => {
    return () => dispatch(chooseEventAddress(false));
  }, [dispatch]);

  return addressesRetrieved && addressesRetrieved.length > 0 ? (
    addressesRetrieved.map((suggestion, index) => (
      <div key={index} className="suggestions-box">
        <ListGroup variant="flush">
          <ListGroup.Item
            onClick={(e) => {
              e.preventDefault();
              dispatch(getLocationDetails(suggestion.locationId));
              dispatch(selectEventAddress(suggestion));
            }}
            className="suggestion-item"
          >
            {suggestion.label}
          </ListGroup.Item>
        </ListGroup>
      </div>
    ))
  ) : (
    <div className="suggestions-box">
      <p className="suggestion-item no-result">
        {capitalizeFirst(strings.myEvents.error.NO_SUGGESTIONS)}
      </p>
    </div>
  );
};

export default Suggestions;
