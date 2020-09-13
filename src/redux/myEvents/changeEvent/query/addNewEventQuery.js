export const addNewEventQuery = (
  title,
  eventImage,
  addressObj,
  description,
  availablePlaces,
  eventDate,
  tel,
  userId,
  email,
  date
) => {
  return {
    query: `mutation($title: String!, $eventImage: EventImage, $addressObj: EventAddress!, $description: String!, $availablePlaces: Int!, $eventDate: Date!, $tel: Int!, $userId: ID!, $email: String!, $date: Date!) {
        addMyEvent(title: $title, eventImage: $eventImage, addressObj: $addressObj, description: $description, availablePlaces: $availablePlaces, eventDate: $eventDate, tel: $tel, userId: $userId, email: $email, date: $date)
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
      date,
    },
  };
};
