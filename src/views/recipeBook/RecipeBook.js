import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import { Row, Col, Button, Image } from "react-bootstrap";
import { capitalizeFirst } from "../../util/Util";
import { strings } from "../../strings/Strings";
import "./recipeBook.css";

const RecipeBook = ({ match: { path, url, isExact } }) => {
  const [activesClasses, setActive] = useState([false, false]);

  const toggleActiveClass = id => {
    console.log(activesClasses[id]);
    setActive(activesClasses => [
      ...activesClasses,
      (activesClasses[id] = !activesClasses[id])
    ]);
  };

  const buttonItems = [
    {
      id: 1,
      name: capitalizeFirst(strings.recipeBook.BUTTON_NEW)
    },
    {
      id: 2,
      name: capitalizeFirst(strings.recipeBook.BUTTON_FAST_FOOD)
    }
  ];
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
        {buttonItems.map(buttonItem => (
          <div key={buttonItem.id}>
            <Row>
              <Col xs={1} />
              <Col xs={11}>
                <Button
                  onClick={() => toggleActiveClass(buttonItem.id)}
                  variant="outline-dark"
                  className={
                    activesClasses[buttonItem.id]
                      ? "recipe-button-active"
                      : "recipebook-knob-button"
                  }
                >
                  <div className="recipe-button-icon" />
                  <div className="recipe-button-text">{buttonItem.name}</div>
                </Button>
              </Col>
            </Row>
            <Row className="mb-3" />
          </div>
        ))}
        <Row className="mb-5" />
        <Row className="mb-5" />
        <Row>
          <Col xs={2} />
          <Col xs={10}>
            <Image
              className="recipebook-soup"
              src={require("../../assets/imgs/soupret.jpg")}
            />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default RecipeBook;
