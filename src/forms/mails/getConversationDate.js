import React from "react";

export const getConversationDate = (conversationDate) => {
  return (
    <>
      {conversationDate.getDate() < 10
        ? `0${conversationDate.getDate()}`
        : conversationDate.getDate()}
      /
      {conversationDate.getMonth() + 1 < 10
        ? `0${conversationDate.getMonth() + 1}`
        : conversationDate.getMonth() + 1}
      /{conversationDate.getFullYear()},{" "}
      {conversationDate.getHours() < 10
        ? `0${conversationDate.getHours()}`
        : conversationDate.getHours()}
      :
      {conversationDate.getMinutes() < 10
        ? `0${conversationDate.getMinutes()}`
        : conversationDate.getMinutes()}
    </>
  );
};
