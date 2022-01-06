import { useMutation } from '@apollo/client';

import { SIGN_UP } from '../../../GraphQL/mutations';

export const useSignup = ({
  onError,
  update,
  ...props
} = {}) => {
  const [signup, { data, loading, ...rest }] = useMutation(SIGN_UP, {
    onError(err) {
      onError ? onError(err) : console.dir(err);
    },
    ...props,
  });

  return {
    signup,
    data,
    isLoading: loading,
    ...rest,
  };
};
