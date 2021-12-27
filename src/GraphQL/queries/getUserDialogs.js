import { gql } from '@apollo/client';

export const GET_USER_DIALOGS = gql`
  query GetUserDialogs {
    getUserDialogs {
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
