import { gql } from "@apollo/client";

export const userCreate = gql`
  mutation BlogPostCreate(
    $providerId: ID!
    $title: String!
    $content: String!
  ) {
    blogPostCreate(
      input: { providerId: $providerId, title: $title, content: $content }
    ) {
      id
      title
      content
      provider {
        id
        user {
          name
        }
      }
      createdAt
    }
  }
`;
