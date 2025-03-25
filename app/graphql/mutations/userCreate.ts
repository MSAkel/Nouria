import { gql } from "@apollo/client";

export const userCreate = gql`
  mutation UserCreate($input: UserCreateInput!) {
    userCreate(input: $input) {
      id
      name
      email
    }
  }
`;
