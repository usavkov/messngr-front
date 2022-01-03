export const getUserTitle = ({
  firstName,
  lastName,
  username,
}) => (
  (firstName && lastName) ? `${firstName} ${lastName}` : username
);
