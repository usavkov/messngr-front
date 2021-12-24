import { useMutation } from "@apollo/client";
import { useHistory, useLocation } from "react-router-dom";

import { SIGN_UP } from "../../../GraphQL/mutations";

import { PAGE_HOME } from "../../../constants";

export const useSignup = ({
  onError,
  update,
  ...props
} = {}) => {
  const history = useHistory();
  const location = useLocation();

  const [signup, { data, loading, ...rest }] = useMutation(SIGN_UP, {
    onError(err) {
      onError ? onError(err) : console.dir(err);
    },
    update(_, res) {
      update && update(_, res)

      console.log(res);

      history.push({
        pathname: location.state?.backPathname ?? PAGE_HOME,
        search: location.search,
      })
    },
    ...props,
  });

  return {
    signup,
    data,
    isLoading: loading,
    ...rest,
  }
};
