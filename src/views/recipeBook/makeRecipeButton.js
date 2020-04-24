import React, { useEffect } from "react";
import { Row, Col, Button } from "react-bootstrap";
import useRecipeButton from "../../hooks/screen/recipeBook/useRecipeButton";
import { addRateComment } from "../../redux/recipeBook/addRateComment/thunk/addRateCommentThunk";
import { useSelector, useDispatch } from "react-redux";
import { capitalize } from "../../util/Util";
import { strings } from "../../strings/Strings";
import "./recipeBook.css";

const MakeRecipeButton = () => {
  const dispatch = useDispatch();
  const { recipeButtonId } = useSelector(
    (state) => state.recipeCategorySelected
  );
  const { rateCommentAdded } = useSelector((state) => state.addRateComment);
  const { detailsDataRetrieved } = useSelector(
    (state) => state.showRecipeDetails
  );
  const { searchInputFilled } = useSelector(
    (state) => state.turnOffRecipeButtons
  );
  const buttonItems = [
    {
      id: 0,
      name: strings.recipeBook.BUTTON_NEW,
      category: strings.recipeBook.CAT_NEWS,
    },
    {
      id: 1,
      name: strings.recipeBook.BUTTON_LUNCH,
      category: strings.recipeBook.CAT_LUNCH,
    },
    {
      id: 2,
      name: strings.recipeBook.BUTTON_DESSERT,
      category: strings.recipeBook.CAT_DESSERT,
    },
    {
      id: 3,
      name: strings.recipeBook.BUTTON_DRINKS,
      category: strings.recipeBook.CAT_DRINKS,
    },
    {
      id: 4,
      name: strings.recipeBook.BUTTON_EVENING,
      category: strings.recipeBook.CAT_EVENING,
    },
    {
      id: 5,
      name: strings.recipeBook.BUTTON_SALADES,
      category: strings.recipeBook.CAT_SALADES,
    },
    {
      id: 6,
      name: strings.recipeBook.BUTTON_FAST_FOOD,
      category: strings.recipeBook.CAT_FAST_FOOD,
    },
  ];
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
      dispatch(addRateComment(false));
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
