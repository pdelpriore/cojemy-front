export const retrieveEventsQuery = (category, userId, email) => {
  return {
    query: `
                  query($category: String!, $userId: ID!, $email: String!) {
                    retrieveEvents(category: $category, userId: $userId, email: $email) {
                        _id
                        title
                        eventImage
                        eventAddress {
                            _id
                            streetNumber
                            streetName
                            postCode
                            city
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
    variables: { category, userId, email },
  };
};
