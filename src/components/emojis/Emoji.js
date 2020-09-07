import React from "react";
import { emojiCodes } from "./emojiCodes";
import ScrollArea from "react-scrollbar";
import "./emoji.css";

const Emoji = () => {
  return (
    <ScrollArea
      className="emoji-scroll-container"
      smoothScrolling={true}
      horizontal={false}
    >
      <div className="emoji-box">
        {emojiCodes
          .split(/[\n,\s,;,;;,;;;]+/)
          .filter((emoji) => emoji.includes("1F"))
          .map((emojiUnicode, index) => {
            return (
              <p key={index}>{String.fromCodePoint("0x" + emojiUnicode)}</p>
            );
          })}
      </div>
    </ScrollArea>
  );
};

export default Emoji;
