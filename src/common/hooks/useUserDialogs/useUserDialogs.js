import { useQuery } from "@apollo/client";
import { useHistory, useLocation } from "react-router-dom";

import { GET_USER_DIALOGS } from "../../../GraphQL/queries";

export const useUserDialogs = ({
  onCompleted,
  onError,
  ...props
} = {}) => {
  const history = useHistory();
  const location = useLocation();

  const { data, loading, ...rest } = useQuery(GET_USER_DIALOGS, {
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
    dialogs: data?.getUserDialogs,
    isLoading: loading,
    ...rest,
  };
};
