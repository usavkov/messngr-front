import { gql } from '@apollo/client';

export const USERS = gql`
  query Users {
    getAllUsers {
      id
      username
      email
      createdAt
    }
  }
`;
