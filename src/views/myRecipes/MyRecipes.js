import React from "react";
import { Row, Col, Button, ListGroup } from "react-bootstrap";
import { useSpring, animated } from "react-spring";
import ScrollArea from "react-scrollbar";
import Navbar from "../../components/navbar/Navbar";
import MyRecipesList from "./MyRecipesList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListUl } from "@fortawesome/free-solid-svg-icons";
import { strings } from "../../strings/Strings";
import MyRecipesForm from "../../forms/myRecipes/myRecipesForm";
import { useDispatch, useSelector } from "react-redux";
import { showNewRecipeForm } from "../../redux/myRecipes/showNewRecipeForm/thunk/showNewRecipeFormThunk";
import { capitalize } from "../../util/Util";
import "./myRecipes.css";

const MyRecipes = ({ match: { path, url, isExact } }) => {
  const dispatch = useDispatch();
  const { newRecipeFormShowed } = useSelector(
    (state) => state.newRecipeFormShow
  );
  const props = useSpring({
    opacity: 1,
    config: { duration: 200 },
    from: { opacity: 0 },
  });
  return (
    <animated.div className="myrecipes-area" style={props}>
      <Navbar path={path} url={url} isExact={isExact} />
      <div className="myrecipes-first-section">
        <Row>
          <Col xs={3} />
          <Col xs={9}>
            <div className="myrecipes-list">
              <ScrollArea
                className="myrecipes-scroll-area"
                smoothScrolling={true}
              >
                <ListGroup>
                  <MyRecipesList />
                </ListGroup>
              </ScrollArea>
            </div>
          </Col>
        </Row>
      </div>
      <div className="myrecipes-second-section">
        <div className={newRecipeFormShowed ? "myrecipes-button-hided" : ""}>
          <Row className="mb-5" />
          <Row className="mb-5" />
          <Row className="mb-5" />
          <Row className="mb-5" />
          <Row>
            <Col xs={5} />
            <Col xs={2}>
              <Button
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(showNewRecipeForm(true));
                }}
                className="myrecipes-button-new-recipe"
                variant="outline-dark"
              >
                <FontAwesomeIcon
                  className="myrecipes-button-icon"
                  icon={faListUl}
                />
                <div className="myrecipes-button-text">
                  {capitalize(strings.myRecipes.BUTTON_NEW_RECIPE)}
                </div>
              </Button>
            </Col>
            <Col xs={5} />
          </Row>
        </div>
        {newRecipeFormShowed && (
          <div className="myrecipes-form-showed">
            <Row className="mb-5" />
            <Row className="mb-5" />
            <Row className="mb-3" />
            <Row>
              <Col xs={2} />
              <Col xs={5}>
                <MyRecipesForm />
              </Col>
              <Col xs={5} />
            </Row>
          </div>
        )}
      </div>
    </animated.div>
  );
};

export default MyRecipes;
