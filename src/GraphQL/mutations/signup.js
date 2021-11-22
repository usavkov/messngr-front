import { gql } from '@apollo/client';

export const SIGN_UP = gql`
mutation Signup(
  $username: String!
  $email: String!
  $password: String!
  $confirmPassword: String!
) {
  signup(
    username: $username
    email: $email
    password: $password
    confirmPassword: $confirmPassword
  ) {
    id
    username
    email
    createdAt
  }
}
`;
