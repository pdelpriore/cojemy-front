import React from "react";

export const getEventDate = (eventDate) => {
  return (
    <>
      {eventDate.getDate() < 10
        ? `0${eventDate.getDate()}`
        : eventDate.getDate()}
      /
      {eventDate.getMonth() + 1 < 10
        ? `0${eventDate.getMonth() + 1}`
        : eventDate.getMonth() + 1}
      /{eventDate.getFullYear()}, godz.{" "}
      {eventDate.getHours() < 10
        ? `0${eventDate.getHours()}`
        : eventDate.getHours()}
      :
      {eventDate.getMinutes() < 10
        ? `0${eventDate.getMinutes()}`
        : eventDate.getMinutes()}
    </>
  );
};
