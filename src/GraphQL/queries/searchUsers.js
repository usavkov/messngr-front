import { gql } from '@apollo/client';

export const SEARCH_USERS = gql`
  query SearchUsers(
    $search: String!
    $limit: Int
    $offset: Int
  ) {
    searchUsers(
      search: $search
      limit: $limit
      offset: $offset
    ) {
      id
      username
      firstName
      lastName
      profileImage
    }
  }
`;
