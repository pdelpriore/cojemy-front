import React from "react";
import Navbar from "../../components/navbar/Navbar";
import ScrollArea from "react-scrollbar";
import { Row, Col, Image, ListGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronCircleRight,
  faChevronCircleLeft,
} from "@fortawesome/free-solid-svg-icons";
import { useSpring, animated } from "react-spring";
import MakeRecipeButton from "./makeRecipeButton";
import RecipesList from "./RecipesList";
import RecipeDetails from "./RecipeDetails";
import SearchRecipeForm from "../../forms/recipeBook/searchRecipe/SearchRecipeForm";
import Emoji from "../../components/emoji/Emoji";
import useRecipeBook from "../../hooks/screen/recipeBook/useRecipeBook";
import Notification from "../../components/notifications/Notification";
import { useSelector } from "react-redux";
import AdSense from "react-adsense";
import "./recipeBook.css";
import "../../shared/global.css";

const RecipeBook = ({ match: { path, url, isExact } }) => {
  const props = useSpring({
    opacity: 1,
    config: { duration: 200 },
    from: { opacity: 0 },
  });
  const { detailsShown, detailsDataError } = useSelector(
    (state) => state.isRecipeDetailsShown
  );
  const { recipesError } = useSelector((state) => state.recipeBook);
  const { searchInputFilled } = useSelector(
    (state) => state.turnOffRecipeButtons
  );
  const { logoutError } = useSelector((state) => state.logout);
  const { emojisShown } = useSelector((state) => state.isEmojiShown);

  const { skip, handlePrev, handleNext } = useRecipeBook();
  return (
    <animated.div className="recipebook-area" style={props}>
      <Navbar path={path} url={url} isExact={isExact} />
      <div className="recipebook-first-section">
        <Row>
          <Col xs={3} />
          <Col xs={9}>
            <div className="recipebook-list">
              <ScrollArea
                className="recipesList-item-simplebar"
                smoothScrolling={true}
              >
                <ListGroup>
                  <RecipesList />
                </ListGroup>
              </ScrollArea>
            </div>
          </Col>
        </Row>
      </div>
      <div className="recipebook-second-section">
        <div className={detailsShown ? "recipebook-recipes-buttons" : ""}>
          <Row className="mb-5" />
          <Row className="mb-4" />
          <Row>
            <Col xs={7} />
            <Col xs={4}>
              <SearchRecipeForm />
            </Col>
            <Col xs={1} />
          </Row>
          <Row className="mb-5" />
          <Row className="mb-4" />
          <Row>
            <Col xs={1} />
            <Col xs={4}>
              <MakeRecipeButton />
            </Col>
            <Col xs={1} />
            <Col xs={5}>
              <Row className="mb-5" />
              <Row className="mb-2" />
              <Image
                className="recipebook-soup"
                src={require("../../assets/imgs/soupret.jpg")}
              />
            </Col>
            <Col xs={1} />
          </Row>
          <Row className="mb-4" />
          {!searchInputFilled && (
            <Row>
              <Col xs={1} />
              <Col xs={1}>
                <FontAwesomeIcon
                  className={
                    skip === 1
                      ? "recipebook-arrows-inactive"
                      : "recipebook-left-arrow"
                  }
                  onClick={skip === 1 ? null : handlePrev}
                  icon={faChevronCircleLeft}
                />
              </Col>
              <Col xs={2} />
              <Col xs={1}>
                <FontAwesomeIcon
                  className={
                    recipesError
                      ? "recipebook-arrows-inactive"
                      : "recipebook-right-arrow"
                  }
                  onClick={recipesError ? null : handleNext}
                  icon={faChevronCircleRight}
                />
              </Col>
              <Col xs={6}>
                <AdSense.Google
                  client={process.env.REACT_APP_CLIENT_AD_SENSE}
                  slot="7806394673"
                  style={{
                    width: "25vw",
                    height: "9vw",
                    float: "left",
                    borderRadius: 5,
                  }}
                  format=""
                />
              </Col>
              <Col xs={1} />
            </Row>
          )}
          <Row className="mb-1" />
          <Row>
            <Col xs={5} />
            <Col xs={6}>
              <Notification
                notificationMessage={logoutError || detailsDataError}
              />
            </Col>
            <Col xs={1} />
          </Row>
        </div>
        {detailsShown && (
          <div className="recipebook-recipes-details">
            <Row className="mb-5" />
            <Row className="mb-5" />
            <RecipeDetails />
          </div>
        )}
      </div>
      {emojisShown && (
        <div className="global-emoji-overlay">
          <Row className="mb-5" />
          <Row className="mb-4" />
          <Row>
            <Col xs={4} />
            <Col xs={4}>
              <Emoji />
            </Col>
            <Col xs={4} />
          </Row>
        </div>
      )}
    </animated.div>
  );
};

export default RecipeBook;
