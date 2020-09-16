import React from "react";
import { Row, Col, Button, Spinner } from "react-bootstrap";
import ScrollArea from "react-scrollbar";
import useEmoji from "../../hooks/screen/emoji/useEmoji";
import { strings } from "../../strings/Strings";
import { capitalizeFirst } from "../../util/Util";
import "./emoji.css";

const Emoji = () => {
  const {
    categories,
    categoryIndex,
    emojiFilteredBySubGroup,
    selectedEmoji,
    loading,
    handleSelectCategory,
    handleEmoji,
    handleSave,
    handleCancel,
  } = useEmoji();

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
      <Row className="mb-2" />
      <Row>
        <Col xs={12}>
          {!loading ? (
            <ScrollArea
              className="emoji-scroll-area"
              smoothScrolling={true}
              horizontal={false}
            >
              {emojiFilteredBySubGroup &&
                Object.values(emojiFilteredBySubGroup).length > 0 &&
                Object.values(emojiFilteredBySubGroup).map(
                  (emojiSubGroup, index) => (
                    <div className="emoji-list-container" key={index}>
                      {emojiSubGroup.map((emoji, index) => (
                        <div
                          onClick={(e) => {
                            e.preventDefault();
                            handleEmoji(emoji);
                          }}
                          className={
                            selectedEmoji === emoji.character
                              ? "emoji-list-item-selected"
                              : "emoji-list-item"
                          }
                          key={index}
                        >
                          {emoji.character}
                        </div>
                      ))}
                    </div>
                  )
                )}
            </ScrollArea>
          ) : (
            <div className="emoji-spinner">
              <Spinner animation="border" variant="dark" />
            </div>
          )}
        </Col>
      </Row>
      <Row className="mb-4" />
      <Row>
        <Col xs={2} />
        <Col xs={8}>
          <Row>
            <Col xs={5}>
              <Button
                variant="dark"
                disabled={!selectedEmoji}
                onClick={handleSave}
              >
                <div className="emoji-button">
                  {capitalizeFirst(strings.myEvents.calendar.button.SAVE)}
                </div>
              </Button>
            </Col>
            <Col xs={2} />
            <Col xs={5}>
              <Button variant="info" onClick={handleCancel}>
                <div className="emoji-button">
                  {capitalizeFirst(strings.myEvents.calendar.button.CANCEL)}
                </div>
              </Button>
            </Col>
          </Row>
        </Col>
        <Col xs={2} />
      </Row>
    </div>
  );
};

export default Emoji;
