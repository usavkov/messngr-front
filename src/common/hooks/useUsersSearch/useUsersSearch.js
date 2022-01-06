import { useLazyQuery } from '@apollo/client';

import { SEARCH_USERS } from '../../../GraphQL/queries';

export const useUsersSearch = (options) => {
  const [searchUsers, { data, loading, ...rest }] = useLazyQuery(SEARCH_USERS, options);

  return {
    searchUsers,
    isLoading: loading,
    users: data?.searchUsers ?? [],
    ...rest,
  };
};
