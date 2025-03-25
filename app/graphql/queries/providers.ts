import { gql } from "@apollo/client";

export const usersQuery = gql`
  query providers {
    providers {
      specialties
      servicesOffered
      user {
        name
      }
    }
  }
`;
