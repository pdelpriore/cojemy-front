export const unjoinEventQuery = (eventId, userId, email) => {
  return {
    query: `
                      mutation($eventId: ID!, $userId: ID!, $email: String!) {
                        unjoinEvent(eventId: $eventId, userId: $userId, email: $email) {
                            _id
                            title
                            eventImage
                            eventAddress {
                                _id
                                label
                                streetNumber
                                streetName
                                postCode
                                city
                                country
                                latitude
                                longitude
                                zoom
                            }
                            description
                            availablePlaces
                            author {
                                _id
                                name
                                photo
                                email
                                followers {
                                  email
                                }
                            }
                            participants {
                                _id
                                name
                                photo
                                email
                            }
                            eventDate
                            tel
                            creationDate
                        }
                      }
                      `,
    variables: { eventId, userId, email },
  };
};
