import { useQuery } from "@apollo/client";
import { useHistory, useLocation } from "react-router-dom";

import { GET_USER_BY_ID } from "../../../GraphQL/queries";

export const useUser = (userId, {
  onCompleted,
  onError,
  ...props
} = {}) => {
  const history = useHistory();
  const location = useLocation();

  const { data, loading, ...rest } = useQuery(GET_USER_BY_ID, {
    skip: !Boolean(userId),
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
    user: data?.getUserById,
    isLoading: loading,
    ...rest,
  };
};
