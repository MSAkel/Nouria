import { gql } from "@apollo/client";

export const userCreate = gql`
  mutation EventCreate($input: EventCreateInput!) {
    eventCreate(input: $input) {
      id
      title
      provider {
        id
        user {
          name
        }
      }
    }
  }
`;
