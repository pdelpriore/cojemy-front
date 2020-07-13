export const searchEventsQuery = (date, city, userId, email) => {
  return {
    query: `
                    query($date: Date, $city: String, $userId: ID!, $email: String!) {
                      searchEvents(date: $date, city: $city, userId: $userId, email: $email) {
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
    variables: { date, city, userId, email },
  };
};
