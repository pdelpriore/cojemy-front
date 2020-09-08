import React from "react";
import { Row, Col, Button, ListGroup, Image } from "react-bootstrap";
import { useSpring, animated } from "react-spring";
import ScrollArea from "react-scrollbar";
import Navbar from "../../components/navbar/Navbar";
import MyRecipesList from "./MyRecipesList";
import MyRecipePreview from "./MyRecipePreview";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";
import { strings } from "../../strings/Strings";
import MyRecipesForm from "../../forms/myRecipes/myRecipesForm";
import Notification from "../../components/notifications/Notification";
import { useDispatch, useSelector } from "react-redux";
import { showNewRecipeForm } from "../../redux/myRecipes/showNewRecipeForm/thunk/showNewRecipeFormThunk";
import { capitalize } from "../../util/Util";
import "./myRecipes.css";

const MyRecipes = ({ match: { path, url, isExact } }) => {
  const dispatch = useDispatch();
  const { newRecipeFormShown } = useSelector(
    (state) => state.isNewRecipeFormShown
  );
  const { myRecipePreviewShown } = useSelector(
    (state) => state.myRecipePreview
  );
  const { myRecipeChangeError } = useSelector(
    (state) => state.isMyRecipeChanged
  );
  const { logoutError } = useSelector((state) => state.logout);
  const { emojiError } = useSelector((state) => state.emojis);

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
        <div
          className={
            newRecipeFormShown || myRecipePreviewShown
              ? "myrecipes-button-hidden"
              : ""
          }
        >
          <Row className="mb-5" />
          <Row className="mb-5" />
          <Row className="mb-5" />
          <Row className="mb-5" />
          <Row>
            <Col xs={4} />
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
                  icon={faFileAlt}
                />
                <div className="myrecipes-button-text">
                  {capitalize(strings.myRecipes.BUTTON_NEW_RECIPE)}
                </div>
              </Button>
            </Col>
            <Col xs={6} />
          </Row>
          <Row className="mb-5" />
          <Row>
            <Col xs={1} />
            <Col xs={6}>
              <Image
                className="myrecipes-image"
                src={require("../../assets/imgs/recipebookret.png")}
              />
            </Col>
            <Col xs={5} />
          </Row>
        </div>
        {newRecipeFormShown && (
          <div className="myrecipes-form-shown">
            <Row className="mb-5" />
            <Row className="mb-4" />
            <Row>
              <Col xs={2} />
              <Col xs={6}>
                <MyRecipesForm />
              </Col>
              <Col xs={3}>
                <Row className="mb-5" />
                <Row className="mb-5" />
                <Row className="mb-5" />
                <Row className="mb-5" />
                <Row className="mb-5" />
                <Row className="mb-5" />
                <Row className="mb-5" />
                <Row className="mb-5" />
                <Row className="mb-5" />
                <Row className="mb-5" />
                <Row className="mb-5" />
                <Row className="mb-5" />
                <Row className="mb-5" />
                <Row className="mb-4" />
                <Notification
                  notificationMessage={
                    myRecipeChangeError || logoutError || emojiError
                  }
                />
              </Col>
              <Col xs={1} />
            </Row>
          </div>
        )}
        {myRecipePreviewShown && (
          <div className="myrecipes-recipe-preview">
            <Row className="mb-5" />
            <Row className="mb-5" />
            <MyRecipePreview />
          </div>
        )}
      </div>
    </animated.div>
  );
};

export default MyRecipes;
