import { gql } from "@apollo/client";

export const usersQuery = gql`
  query Events {
    events {
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
