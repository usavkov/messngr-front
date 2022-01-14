import { gql } from '@apollo/client';

export const MESSAGE_SENT_SUBSCRIPTION = gql`
  subscription MessageSent {
    messageSent {
      id
      type
      createdAt
      updatedAt
      dialog {
        id
      }
      chat {
        id
      }
      from
      to
      content
      attachments
    }
  }
`;
