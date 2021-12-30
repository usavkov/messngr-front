import { useQuery } from '@apollo/client';
import { useEffect } from 'react';

import { GET_USER_DIALOGS } from '../../../GraphQL/queries';
import { MESSAGE_SENT_SUBSCRIPTION } from '../../../GraphQL/subscriptions';

export const useUserDialogs = ({ onCompleted, onError, ...props } = {}) => {
  const { data, loading, subscribeToMore, ...rest } = useQuery(GET_USER_DIALOGS, {
    onError(err) {
      onError ? onError(err) : console.log(err);
    },
    onCompleted(variables) {
      onCompleted && onCompleted(variables);
    },
    ...props,
  });

  useEffect(() => {
    const unsubscribe = subscribeToMore({
      document: MESSAGE_SENT_SUBSCRIPTION,
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) return prev;
        if (subscriptionData.data.messageSent.type !== 'DIRECT') return prev;

        const newMessage = subscriptionData.data.messageSent;
        const dialog = prev.getUserDialogs.find(({ id }) => id === newMessage.dialogId);

        const updatedDialog = {
          ...dialog,
          messages: [
            newMessage,
            ...(dialog?.messages || []),
          ]
        }

        return Object.assign({}, prev, {
          getUserDialogs: (
            [updatedDialog, ...prev.getUserDialogs.filter(({ id }) => id !== updatedDialog.id)]
          ),
        });
      },
    });

    if (unsubscribe) return () => unsubscribe();
  }, [subscribeToMore]);

  return {
    dialogs: data?.getUserDialogs,
    isLoading: loading,
    subscribeToMore,
    ...rest,
  };
};
