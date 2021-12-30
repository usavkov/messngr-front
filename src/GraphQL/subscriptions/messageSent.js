import { gql } from '@apollo/client';

export const MESSAGE_SENT = gql`
  subscription MessageSent {
    messageSent {
      id
      createdAt
      from
      to
      content
      attachments
    }
  }
`;
