import React, { useEffect } from "react";
import { Row, Col, Button } from "react-bootstrap";
import useRecipeButton from "../../hooks/screen/recipeBook/useRecipeButton";
import { capitalizeFirst } from "../../util/Util";
import { strings } from "../../strings/Strings";
import "./recipeBook.css";

const MakeRecipeButton = () => {
  const { activesClasses, toggleActiveClass } = useRecipeButton();
  const buttonItems = [
    {
      id: 0,
      name: capitalizeFirst(strings.recipeBook.BUTTON_NEW)
    },
    {
      id: 1,
      name: capitalizeFirst(strings.recipeBook.BUTTON_FAST_FOOD)
    }
  ];
  useEffect(() => {
    toggleActiveClass(buttonItems[0].id);
  }, []);
  return buttonItems.map(buttonItem => (
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
  ));
};

export default MakeRecipeButton;
