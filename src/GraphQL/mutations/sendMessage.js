import { gql } from '@apollo/client';

export const SEND_MESSAGE = gql`
mutation SendMessage(
  $type: MessageTypes!
  $chatId: String
  $to: ID
  $content: String!
  $attachments: [String]
) {
  sendMessage(
    type: $type,
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
