import React from "react";
import { Row, Col, Button, ListGroup } from "react-bootstrap";
import { useSpring, animated } from "react-spring";
import ScrollArea from "react-scrollbar";
import Navbar from "../../components/navbar/Navbar";
import MyRecipesList from "./MyRecipesList";
import "./myRecipes.css";

const MyRecipes = ({ match: { path, url, isExact } }) => {
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
      <div className="myrecipes-second-section"></div>
    </animated.div>
  );
};

export default MyRecipes;
