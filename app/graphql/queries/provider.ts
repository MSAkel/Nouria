import { gql } from "@apollo/client";

export const providerQuery = gql`
  query Provider($providerId: ID!) {
    provider(providerId: $providerId) {
      specialties
      servicesOffered
      user {
        name
      }
    }
  }
`;
