import { gql } from '@apollo/client';

export const DELETE_MESSAGE = gql`
mutation DeleteMessage(
  $messageId: ID!
) {
  deleteMessage(
    messageId: $messageId
  ) {
    id
    dialogId
    chatId
  }
}
`;
