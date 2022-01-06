export const getGraphQLError = (error) => (
  error?.graphQLErrors?.[0]?.extensions?.errors?.[0]?.context?.code ?? error?.message
);
