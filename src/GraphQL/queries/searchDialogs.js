import { gql } from '@apollo/client';

export const SEARCH_DIALOGS = gql`
  query SearchDialogs(
    $search: String!
  ) {
    searchDialogs(
      search: $search
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
