import { gql } from '@apollo/client';

export const MESSAGE_SENT_SUBSCRIPTION = gql`
  subscription MessageSent {
    messageSent {
      type
      id
      chatId
      dialogId
      createdAt
      updatedAt
      from
      to
      content
      attachments
    }
  }
`;
