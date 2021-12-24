import { useLazyQuery } from "@apollo/client";
import { useHistory, useLocation } from "react-router-dom";

import { LOGIN } from "../../../GraphQL/queries";

import { ACTION_LOGIN, PAGE_HOME } from "../../../constants";
import { useAuth } from "../../../utils";

export const useLogin = ({
  onCompleted,
  onError,
  ...props
} = {}) => {
  const { authDispatch } = useAuth();
  const history = useHistory();
  const location = useLocation();

  const [login, { data, loading, ...rest }] = useLazyQuery(LOGIN, {
    onError(err) {
      onError ? onError(err) : console.log(err);
    },
    onCompleted(variables) {
      onCompleted && onCompleted(variables);

      authDispatch({type: ACTION_LOGIN, payload: data});

      history.push({
        pathname: location.state?.backPathname ?? PAGE_HOME,
        search: location.search,
      })
    },
    ...props,
  })

  return {
    login,
    isLoading: loading,
    data,
    ...rest,
  };
};
