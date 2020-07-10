export const removeEventQuery = (eventId, addressId, userId, email) => {
  return {
    query: `mutation($eventId: ID!, $addressId: ID!, $userId: ID!, $email: String!) {
            removeEvent(eventId: $eventId, addressId: $addressId, userId: $userId, email: $email)
        }`,
    variables: {
      eventId,
      addressId,
      userId,
      email,
    },
  };
};
