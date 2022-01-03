import { gql } from '@apollo/client';

export const GET_DIALOG_MESSAGES = gql`
  query GetMessagesByDialogId(
    $dialogId: ID!
  ) {
    getMessagesByDialogId(dialogId: $dialogId) {
      id
      createdAt
      updatedAt
      from
      to
      content
    }
  }
`;
