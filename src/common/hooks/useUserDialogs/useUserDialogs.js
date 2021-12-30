import { useQuery } from '@apollo/client';

import { GET_USER_DIALOGS } from '../../../GraphQL/queries';

export const useUserDialogs = ({ onCompleted, onError, ...props } = {}) => {
  const { data, loading, ...rest } = useQuery(GET_USER_DIALOGS, {
    onError(err) {
      onError ? onError(err) : console.log(err);
    },
    onCompleted(variables) {
      onCompleted && onCompleted(variables);
    },
    fetchPolicy: 'network-only',
    nextFetchPolicy: 'cache-first',
    ...props,
  });

  return {
    dialogs: data?.getUserDialogs,
    isLoading: loading,
    ...rest,
  };
};
