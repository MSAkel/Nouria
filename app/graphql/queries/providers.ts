import { gql } from "@apollo/client";

export const providersQuery = gql`
  query providers {
    providers {
      id
      specialties
      servicesOffered
      user {
        name
      }
    }
  }
`;
