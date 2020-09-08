import React from "react";
import { Row, Col } from "react-bootstrap";
import useEmoji from "../../hooks/screen/emoji/useEmoji";
import { useSelector, useDispatch } from "react-redux";
import "./emoji.css";

const Emoji = () => {
  const dispatch = useDispatch();
  const {
    emojisFiltered,
    categories,
    categoryIndex,
    handleSelectCategory,
  } = useEmoji();

  const { emojiLoading } = useSelector((state) => state.emojis);

  return (
    <div className="emoji-box">
      <Row>
        <Col xs={12}>
          <div className="emoji-category-names">
            {categories.length > 0 &&
              categories.map((category, index) => (
                <div
                  onClick={(e) => {
                    e.preventDefault();
                    handleSelectCategory(index);
                  }}
                  className={
                    categoryIndex === index
                      ? "emoji-category-active"
                      : "emoji-category"
                  }
                  key={index}
                >
                  {category}
                </div>
              ))}
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={3} />
        <Col xs={9}>
          <div className="emoji-list"></div>
        </Col>
      </Row>
    </div>
  );
};

export default Emoji;
