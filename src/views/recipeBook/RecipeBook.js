import React from "react";
import Navbar from "../../components/navbar/Navbar";
import { Row, Col, Button, Image } from "react-bootstrap";
import { capitalizeFirst } from "../../util/Util";
import { strings } from "../../strings/Strings";
import "./recipeBook.css";

const RecipeBook = ({ match: { path, url, isExact } }) => {
  return (
    <div className="recipebook-area">
      <Navbar path={path} url={url} isExact={isExact} />
      <div className="recipebook-first-section">
        <Row>
          <Col xs={2} />
          <Col xs={10}>
            <div className="recipebook-list"></div>
          </Col>
        </Row>
      </div>
      <div className="recipebook-second-section">
        <Row className="mb-5" />
        <Row className="mb-5" />
        <Row className="mb-5" />
        <Row>
          <Col xs={1} />
          <Col xs={11}>
            <Button variant="outline-dark" className="recipebook-knob-button">
              <div className="recipe-button-icon" />
              <div className="recipe-button-text">
                {capitalizeFirst(strings.recipeBook.BUTTON_NEW)}
              </div>
            </Button>
          </Col>
        </Row>
        <Row className="mb-3" />
        <Row>
          <Col xs={1} />
          <Col xs={11}>
            <Button variant="outline-dark" className="recipebook-knob-button">
              <div className="recipe-button-icon" />
              <div className="recipe-button-text">
                {capitalizeFirst(strings.recipeBook.BUTTON_FAST_FOOD)}
              </div>
            </Button>
          </Col>
        </Row>
        <Row className="mb-5" />
        <Row className="mb-5" />
        <Row>
          <Col xs={1} />
          <Col xs={10}>
            <Image
              className="recipebook-soup"
              src={require("../../assets/imgs/soupret.jpg")}
            />
          </Col>
          <Col xs={1} />
        </Row>
      </div>
    </div>
  );
};

export default RecipeBook;
