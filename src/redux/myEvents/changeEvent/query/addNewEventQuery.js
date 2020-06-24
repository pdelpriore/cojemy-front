export const addNewEventQuery = (
  title,
  eventImage,
  addressObj,
  description,
  availablePlaces,
  eventDate,
  userId,
  email
) => {
  return {
    query: `mutation($title: String!, $eventImage: EventImage, $addressObj: EventAddress!, $description: String!, $availablePlaces: Int!, $eventDate: Date!, $userId: ID!, $email: String!) {
        addMyEvent(title: $title, eventImage: $eventImage, addressObj: $addressObj, description: $description, availablePlaces: $availablePlaces, eventDate: $eventDate, userId: $userId, email: $email)
    }`,
    variables: {
      title,
      eventImage,
      addressObj,
      description,
      availablePlaces,
      eventDate,
      userId,
      email,
    },
  };
};
