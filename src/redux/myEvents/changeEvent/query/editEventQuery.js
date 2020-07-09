export const editEventQuery = (
  title,
  eventImage,
  addressObj,
  description,
  availablePlaces,
  eventDate,
  tel,
  eventId,
  addressId,
  userId,
  email
) => {
  return {
    query: `mutation($title: String!, $eventImage: EventImage, $addressObj: EventAddress!, $description: String!, $availablePlaces: Int!, $eventDate: Date!, $tel: Int!, $eventId: ID!, $addressId: ID!, $userId: ID!, $email: String!) {
          editEvent(title: $title, eventImage: $eventImage, addressObj: $addressObj, description: $description, availablePlaces: $availablePlaces, eventDate: $eventDate, tel: $tel, eventId: $eventId, addressId: $addressId, userId: $userId, email: $email)
      }`,
    variables: {
      title,
      eventImage,
      addressObj,
      description,
      availablePlaces,
      eventDate,
      tel,
      eventId,
      addressId,
      userId,
      email,
    },
  };
};
