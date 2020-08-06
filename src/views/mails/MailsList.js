import React, { useEffect } from "react";
import { Row, Col, Spinner } from "react-bootstrap";
import { strings } from "../../strings/Strings";
import Img from "react-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { createDate, capitalize } from "../../util/Util";
import { useDispatch, useSelector } from "react-redux";
import useMailsList from "../../hooks/screen/mails/useMailsList";
import "./mails.css";

const MailsList = () => {
  const dispatch = useDispatch();

  const { loading, error } = useMailsList();
  const { messages } = useSelector((state) => state.userMessages);

  return loading ? (
    <div className="myrecipes-list-loading-area">
      <Spinner animation="border" role="status" variant="light" />
    </div>
  ) : error.getMessagesError ? (
    <div className="myrecipes-list-item-norecipes">
      {error.getMessagesError}
    </div>
  ) : (
    <div className="myrecipes-list-main-area">
      {messages.length > 0 &&
        messages.map((message, index) => (
          <div
            onClick={(e) => {
              e.preventDefault();
              //dispatch(myRecipeData(retrieveRecipe));
            }}
            className="myrecipes-list-item"
            key={index}
          >
            <Row>
              <Col xs={3}>
                <Img
                  className="mails-list-item-picture"
                  src={require("../../assets/imgs/cookerret.png")}
                  loader={<Spinner animation="border" variant="info" />}
                />
              </Col>
              <Col xs={9}>
                <Row>
                  <Col xs={7} />
                  <Col xs={5}>
                    <div>data</div>
                  </Col>
                </Row>
                <div className="myrecipes-list-item-title">recipient name</div>
                <div style={{ height: 5 }} />
                <div className="myrecipes-list-item-author">
                  <div className="myrecipes-list-item-icon">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </div>
                  <div>tresc ostatniej wiadomosci</div>
                </div>
              </Col>
            </Row>
          </div>
        ))}
    </div>
  );
};

export default MailsList;
