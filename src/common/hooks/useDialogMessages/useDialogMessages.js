import { useQuery } from '@apollo/client';
import { useEffect } from 'react';

import { GET_DIALOG_MESSAGES } from '../../../GraphQL/queries';
import { MESSAGE_SENT_SUBSCRIPTION } from '../../../GraphQL/subscriptions';

export const useDialogMessages = (
  dialogId,
  { onCompleted, onError, ...props } = {},
) => {
  const { data, loading, subscribeToMore, ...rest } = useQuery(
    GET_DIALOG_MESSAGES,
    {
      variables: {
        dialogId,
      },
      onError(err) {
        onError ? onError(err) : console.log(err);
      },
      onCompleted(variables) {
        onCompleted && onCompleted(variables);
      },
      ...props,
    },
  );

  useEffect(() => {
    const unsubscribe = subscribeToMore({
      document: MESSAGE_SENT_SUBSCRIPTION,
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) return prev;

        const newMessage = subscriptionData.data.messageSent;

        return Object.assign({}, prev, {
          getMessagesByDialogId: [newMessage, ...prev.getMessagesByDialogId]
        });
      },
    });

    if (unsubscribe) return () => unsubscribe();
  }, [subscribeToMore]);

  return {
    messages: data?.getMessagesByDialogId,
    isLoading: loading,
    subscribeToMore,
    ...rest,
  };
};
