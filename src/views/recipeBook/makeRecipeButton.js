import React, { useEffect } from "react";
import { Row, Col, Button } from "react-bootstrap";
import useRecipeButton from "../../hooks/screen/recipeBook/useRecipeButton";
import { useSelector } from "react-redux";
import { capitalize } from "../../util/Util";
import { strings } from "../../strings/Strings";
import "./recipeBook.css";

const MakeRecipeButton = () => {
  const { recipeButtonId } = useSelector(state => state.recipeCategorySelected);
  const { detailsDataRetrieved, rateCommentEdited } = useSelector(
    state => state.showRecipeDetails
  );
  const buttonItems = [
    {
      id: 0,
      name: strings.recipeBook.BUTTON_NEW,
      category: strings.recipeBook.CAT_NEWS
    },
    {
      id: 1,
      name: strings.recipeBook.BUTTON_FAST_FOOD,
      category: strings.recipeBook.CAT_FAST_FOOD
    }
  ];
  const { activesClasses, toggleActiveClass } = useRecipeButton(
    buttonItems.length
  );

  let commentsLength =
    detailsDataRetrieved.comments && detailsDataRetrieved.comments.length;

  useEffect(() => {
    toggleActiveClass(
      buttonItems[recipeButtonId].id,
      buttonItems[recipeButtonId].category
    );
  }, [commentsLength, rateCommentEdited]);

  return buttonItems.map(buttonItem => (
    <div key={buttonItem.id}>
      <Row>
        <Col xs={2} />
        <Col xs={10}>
          <Button
            onClick={e => {
              e.preventDefault();
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
