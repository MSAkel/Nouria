import { gql } from "@apollo/client";

export const userCreate = gql`
  mutation BlogPostCreate($userId: ID!, $title: String!, $content: String!) {
    blogPostCreate(
      input: { userId: $userId, title: $title, content: $content }
    ) {
      id
      title
      content
      user {
        id
        name
      }
      createdAt
    }
  }
`;
