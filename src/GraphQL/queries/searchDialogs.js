import { gql } from '@apollo/client';

export const SEARCH_DIALOGS = gql`
  query SearchDialogs(
    $search: String!
    $limit: Int
    $offset: Int
  ) {
    searchDialogs(
      search: $search
      limit: $limit
      offset: $offset
    ) {
      id
      interlocutors {
        id
        profileImage
        username
        firstName
        lastName
      }
      messages {
        id
        from
        to
        attachments
        content
      }
    }
  }
`;
