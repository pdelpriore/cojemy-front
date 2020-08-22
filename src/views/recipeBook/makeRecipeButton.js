import React, { useEffect } from "react";
import { Row, Col, Button } from "react-bootstrap";
import useRecipeButton from "../../hooks/screen/recipeBook/useRecipeButton";
import { changeRateComment } from "../../redux/recipeBook/changeRateComment/thunk/changeRateCommentThunk";
import { useSelector, useDispatch } from "react-redux";
import { capitalize } from "../../util/Util";
import { recipeButtonItemsArray } from "../../shared/buttonItemsArray";
import "./recipeBook.css";

const MakeRecipeButton = () => {
  const dispatch = useDispatch();
  const { recipeButtonId } = useSelector(
    (state) => state.recipeCategorySelected
  );
  const { rateCommentChanged } = useSelector(
    (state) => state.isRateCommentChanged
  );
  const { detailsDataRetrieved } = useSelector(
    (state) => state.isRecipeDetailsShown
  );
  const { searchInputFilled } = useSelector(
    (state) => state.turnOffRecipeButtons
  );
  const {
    activesClasses,
    toggleActiveClass,
    buttonPressedCount,
    setButtonPressedCount,
  } = useRecipeButton(recipeButtonItemsArray.length);

  useEffect(() => {
    if (!detailsDataRetrieved.title && !searchInputFilled)
      toggleActiveClass(
        recipeButtonItemsArray[recipeButtonId].id,
        recipeButtonItemsArray[recipeButtonId].category
      );
  }, [detailsDataRetrieved, recipeButtonId, searchInputFilled]);

  useEffect(() => {
    if (searchInputFilled) {
      toggleActiveClass(null, null);
    } else {
      toggleActiveClass(
        recipeButtonItemsArray[recipeButtonId].id,
        recipeButtonItemsArray[recipeButtonId].category
      );
    }
    return () => {
      dispatch(changeRateComment(false));
    };
  }, [searchInputFilled, recipeButtonId, rateCommentChanged, dispatch]);

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
