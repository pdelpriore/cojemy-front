export const retrieveEventsQuery = (
  category,
  userId,
  email,
  skip,
  limit,
  date
) => {
  return {
    query: `
                  query($category: String!, $userId: ID!, $email: String!, $skip: Int, $limit: Int, $date: Date!) {
                    retrieveEvents(category: $category, userId: $userId, email: $email, skip: $skip, limit: $limit, date: $date) {
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
    variables: { category, userId, email, skip, limit, date },
  };
};
