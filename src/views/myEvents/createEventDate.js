import React from "react";

export const createEventDate = (eventDate) => {
  return (
    <>
      {eventDate.getDate() < 10
        ? `0${eventDate.getDate()}`
        : eventDate.getDate()}
      /
      {eventDate.getMonth() < 10
        ? `0${eventDate.getMonth()}`
        : eventDate.getMonth()}
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
