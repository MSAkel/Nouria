import { gql } from "@apollo/client";

export const eventQuery = gql`
  query Event($eventId: ID!) {
    event(eventId: $eventId) {
      title
      date
      price
      duration
      location
      seats
    }
  }
`;
