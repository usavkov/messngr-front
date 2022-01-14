import { gql } from '@apollo/client';

export const MESSAGE_DELETED_SUBSCRIPTION = gql`
  subscription MessageDeleted {
    messageDeleted {
      type
      id
      chat {
        id
      }
      dialog {
        id
      }
      createdAt
      updatedAt
      from
      to
      content
      attachments
    }
  }
`;
