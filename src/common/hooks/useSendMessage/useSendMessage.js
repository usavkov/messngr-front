import { useMutation } from '@apollo/client';

import { SEND_MESSAGE } from '../../../GraphQL/mutations';

export const useSendMessage = ({
  onError,
  ...props
} = {}) => {
  const [sendMessage, { data, loading, ...rest }] = useMutation(SEND_MESSAGE, {
    onError(err) {
      onError ? onError(err) : console.dir(err);
    },
    ...props,
  });

  return {
    sendMessage,
    message: data?.sendMessage,
    isLoading: loading,
    ...rest,
  };
};
