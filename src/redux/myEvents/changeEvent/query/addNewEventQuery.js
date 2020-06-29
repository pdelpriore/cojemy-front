export const addNewEventQuery = (
  title,
  eventImage,
  addressObj,
  description,
  availablePlaces,
  eventDate,
  tel,
  userId,
  email
) => {
  return {
    query: `mutation($title: String!, $eventImage: EventImage, $addressObj: EventAddress!, $description: String!, $availablePlaces: Int!, $eventDate: Date!, $tel: Int!, $userId: ID!, $email: String!) {
        addMyEvent(title: $title, eventImage: $eventImage, addressObj: $addressObj, description: $description, availablePlaces: $availablePlaces, eventDate: $eventDate, tel: $tel, userId: $userId, email: $email)
    }`,
    variables: {
      title,
      eventImage,
      addressObj,
      description,
      availablePlaces,
      eventDate,
      tel,
      userId,
      email,
    },
  };
};
