import { useMutation } from "@apollo/client";

import { DELETE_MESSAGE } from "../../../GraphQL/mutations";

export const useDeleteMessage = (messageId, {
  onError,
  ...props
} = {}) => {
  const [deleteMessage, { data, loading, ...rest }] = useMutation(DELETE_MESSAGE, {
    variables: {
      messageId,
    },
    skip: !Boolean(messageId),
    onError(err) {
      onError ? onError(err) : console.dir(err);
    },
    ...props,
  });

  return {
    deleteMessage,
    message: data?.sendMessage,
    isLoading: loading,
    ...rest,
  }
};
