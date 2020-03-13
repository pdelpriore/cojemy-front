import React, { useEffect } from "react";
import { Row, Col, Button } from "react-bootstrap";
import useRecipeButton from "../../hooks/screen/recipeBook/useRecipeButton";
import { capitalizeFirst } from "../../util/Util";
import { strings } from "../../strings/Strings";
import "./recipeBook.css";

const MakeRecipeButton = () => {
  const buttonItems = [
    {
      id: 0,
      name: capitalizeFirst(strings.recipeBook.BUTTON_NEW),
      category: strings.recipeBook.CAT_NEWS
    },
    {
      id: 1,
      name: capitalizeFirst(strings.recipeBook.BUTTON_FAST_FOOD),
      category: strings.recipeBook.CAT_FAST_FOOD
    }
  ];
  const { activesClasses, toggleActiveClass } = useRecipeButton(
    buttonItems.length
  );
  useEffect(() => {
    toggleActiveClass(buttonItems[0].id, buttonItems[0].category);
  }, []);
  return buttonItems.map(buttonItem => (
    <div key={buttonItem.id}>
      <Row>
        <Col xs={1} />
        <Col xs={11}>
          <Button
            onClick={() =>
              toggleActiveClass(buttonItem.id, buttonItem.category)
            }
            variant="dark"
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
