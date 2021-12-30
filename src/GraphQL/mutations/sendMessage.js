import { gql } from '@apollo/client';

export const SEND_MESSAGE = gql`
mutation SendMessage(
  $type: MessageTypes!
  $dialogId: ID
  $chatId: ID
  $to: ID
  $content: String!
  $attachments: [String]
) {
  sendMessage(
    type: $type,
    dialogId: $dialogId,
    chatId: $chatId,
    to: $to,
    content: $content,
    attachments: $attachments
  ) {
    id
    from
    to
    type
    createdAt
    content
    attachments
  }
}
`;
