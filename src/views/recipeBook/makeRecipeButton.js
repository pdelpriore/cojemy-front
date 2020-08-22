import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import useRecipeButton from "../../hooks/screen/recipeBook/useRecipeButton";
import { capitalize } from "../../util/Util";
import { recipeButtonItemsArray } from "../../shared/buttonItemsArray";
import "./recipeBook.css";

const MakeRecipeButton = () => {
  const {
    activesClasses,
    toggleActiveClass,
    buttonPressedCount,
    setButtonPressedCount,
  } = useRecipeButton();

  return recipeButtonItemsArray.map((buttonItem) => (
    <div key={buttonItem.id}>
      <Row>
        <Col xs={2} />
        <Col xs={10}>
          <Button
            onClick={(e) => {
              e.preventDefault();
              setButtonPressedCount(buttonPressedCount + 1);
              toggleActiveClass(buttonItem.id, buttonItem.category);
            }}
            variant="dark"
            className={
              activesClasses[buttonItem.id]
                ? "recipe-button-active"
                : "recipebook-knob-button"
            }
          >
            <div className="recipe-button-icon" />
            <div className="recipe-button-text">
              {capitalize(buttonItem.name)}
            </div>
          </Button>
        </Col>
      </Row>
      <Row className="mb-3" />
    </div>
  ));
};

export default MakeRecipeButton;
