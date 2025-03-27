import { gql } from "@apollo/client";

export const eventsQuery = gql`
  query Events {
    events {
      id
      title
      date
      price
      duration
      location
      seats
      provider {
        user {
          name
        }
      }
    }
  }
`;
