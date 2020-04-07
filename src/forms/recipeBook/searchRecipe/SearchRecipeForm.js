import React from "react";
import { Row, Col, Button, Form, Spinner } from "react-bootstrap";
import { capitalizeFirst } from "../../util/Util";
import { useSpring, animated } from "react-spring";
import { useSelector, useDispatch } from "react-redux";
import { strings } from "../../strings/Strings";
import "./searchRecipe.css";

const SearchRecipeForm = () => {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
  });
  const dispatch = useDispatch();
  return (
    <animated.div style={props}>
      <Form>
        <Row>
          <Col xs={12}>
            <Form.Group controlId="formBasicSearchRecipeName">
              <Form.Label className="searchRecipe-text-family">
                {capitalizeFirst(strings.searchRecipe.SEARCH)}
              </Form.Label>
              <Form.Control
                onChange={handleInputChange}
                value={inputs.recipe || ""}
                className="searchRecipe-placeholder"
                size="lg"
                name="recipe"
                type="text"
                placeholder={strings.searchRecipe.SEARCH}
              ></Form.Control>
            </Form.Group>
          </Col>
        </Row>
      </Form>
    </animated.div>
  );
};

export default SearchRecipeForm;
