import { useQuery } from '@apollo/client';

import { GET_USER_BY_ID } from '../../../GraphQL/queries';

export const useUser = (userId, { onCompleted, onError, ...props } = {}) => {
  const { data, loading, ...rest } = useQuery(GET_USER_BY_ID, {
    variables: {
      userId,
    },
    skip: !userId,
    onError(err) {
      onError ? onError(err) : console.log(err);
    },
    onCompleted(variables) {
      onCompleted && onCompleted(variables);
    },
    ...props,
  });

  return {
    user: data?.getUserById || {},
    isLoading: loading,
    ...rest,
  };
};
