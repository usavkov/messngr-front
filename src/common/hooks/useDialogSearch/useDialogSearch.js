import { useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';
import { cloneDeep } from 'lodash';

import { SEARCH_DIALOGS } from '../../../GraphQL/queries';
import {
  MESSAGE_DELETED_SUBSCRIPTION,
  MESSAGE_SENT_SUBSCRIPTION,
} from '../../../GraphQL/subscriptions';

export const useDialogSearch = ({
  onCompleted,
  onError,
  ...props
} = {}) => {
  const [searchDialogs, {
    data, loading, subscribeToMore, ...rest
  }] = useLazyQuery(
    SEARCH_DIALOGS,
    {
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
    const unsubscribeAll = [
      subscribeToMore({
        document: MESSAGE_SENT_SUBSCRIPTION,
        updateQuery: (prev, { subscriptionData }) => {
          if (!subscriptionData.data) return prev;
          if (subscriptionData.data.messageSent.type !== 'DIRECT') return prev;

          const newMessage = subscriptionData.data.messageSent;
          const dialog = prev.searchDialogs.find(
            ({ id }) => id === newMessage.dialog?.id,
          );

          const updatedDialog = {
            ...dialog,
            messages: [newMessage, ...(dialog?.messages || [])],
          };

          return {
            ...prev,
            searchDialogs: [
              updatedDialog,
              ...prev.searchDialogs.filter(
                ({ id }) => id !== updatedDialog.id,
              ),
            ],
          };
        },
      }),

      subscribeToMore({
        document: MESSAGE_DELETED_SUBSCRIPTION,
        updateQuery: (prev, { subscriptionData }) => {
          if (!subscriptionData.data) return prev;

          const messageToDelete = subscriptionData.data.messageDeleted;

          const clonedDialog = cloneDeep(prev);
          const dialog = clonedDialog.searchDialogs.find(
            ({ id }) => id === messageToDelete?.dialog?.id,
          );

          dialog.messages = dialog?.messages?.filter(
            ({ id }) => id !== messageToDelete.id,
          );

          return clonedDialog;
        },
      }),
    ];

    return () => unsubscribeAll.forEach((unsubscribe) => unsubscribe());
  }, [subscribeToMore]);

  return {
    searchDialogs,
    subscribeToMore,
    isLoading: loading,
    dialogs: data?.searchDialogs ?? [],
    ...rest,
  };
};
