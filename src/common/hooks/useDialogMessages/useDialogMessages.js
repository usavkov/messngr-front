import { useQuery } from "@apollo/client";
import { useHistory, useLocation } from "react-router-dom";

import { GET_DIALOG_MESSAGES } from "../../../GraphQL/queries";

export const useDialogMessages = (dialogId, {
  onCompleted,
  onError,
  ...props
} = {}) => {
  const { data, loading, ...rest } = useQuery(GET_DIALOG_MESSAGES, {
    variables: {
      dialogId,
    },
    onError(err) {
      onError
        ? onError(err)
        : console.log(err)
    },
    onCompleted(variables) {
      onCompleted && onCompleted(variables);
    },
    ...props,
  })

  return {
    messages: data?.getMessagesByDialogId,
    isLoading: loading,
    ...rest,
  };
};
