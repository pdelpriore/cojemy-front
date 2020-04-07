import React from "react";
import { Row, Col, Form, FormControl, InputGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { strings } from "../../../strings/Strings";
import useSearchRecipe from "../../../hooks/form/searchRecipe/useSearchRecipe";
import "./searchRecipe.css";

const SearchRecipeForm = () => {
  const dispatch = useDispatch();
  const { inputs, handleInputChange } = useSearchRecipe();
  return (
    <div>
      <Form>
        <Row>
          <Col xs={12}>
            <Form.Group controlId="formBasicSearchRecipeName">
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text className="searchrecipe-icon-box">
                    <FontAwesomeIcon
                      className="searchrecipe-icon"
                      icon={faSearch}
                    />
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  onChange={handleInputChange}
                  value={inputs.recipe || ""}
                  className="searchrecipe-placeholder"
                  size="sm"
                  name="recipe"
                  type="text"
                  placeholder={strings.searchRecipe.SEARCH}
                ></Form.Control>
              </InputGroup>
            </Form.Group>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default SearchRecipeForm;
