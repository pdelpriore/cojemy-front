import React, { useEffect } from "react";
import { Row, Col, Button } from "react-bootstrap";
import useRecipeButton from "../../hooks/screen/recipeBook/useRecipeButton";
import { changeRateComment } from "../../redux/recipeBook/changeRateComment/thunk/changeRateCommentThunk";
import { useSelector, useDispatch } from "react-redux";
import { capitalize } from "../../util/Util";
import { buttonItemsArray } from "../../shared/buttonItemsArray";
import "./recipeBook.css";

const MakeRecipeButton = () => {
  const dispatch = useDispatch();
  const { recipeButtonId } = useSelector(
    (state) => state.recipeCategorySelected
  );
  const { rateCommentAdded } = useSelector(
    (state) => state.isRateCommentChanged
  );
  const { detailsDataRetrieved } = useSelector(
    (state) => state.isRecipeDetailsShowed
  );
  const { searchInputFilled } = useSelector(
    (state) => state.turnOffRecipeButtons
  );
  const buttonItems = buttonItemsArray;
  const { activesClasses, toggleActiveClass } = useRecipeButton(
    buttonItems.length
  );

  useEffect(() => {
    if (!detailsDataRetrieved.title && !searchInputFilled)
      toggleActiveClass(
        buttonItems[recipeButtonId].id,
        buttonItems[recipeButtonId].category
      );
  }, [detailsDataRetrieved, searchInputFilled]);

  useEffect(() => {
    if (searchInputFilled) {
      toggleActiveClass(null, null);
    } else {
      toggleActiveClass(
        buttonItems[recipeButtonId].id,
        buttonItems[recipeButtonId].category
      );
    }
    return () => {
      dispatch(changeRateComment(false));
    };
  }, [searchInputFilled, rateCommentAdded, dispatch]);

  return buttonItems.map((buttonItem) => (
    <div key={buttonItem.id}>
      <Row>
        <Col xs={2} />
        <Col xs={10}>
          <Button
            onClick={(e) => {
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
