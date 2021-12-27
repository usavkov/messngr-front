import { useLazyQuery } from "@apollo/client";
import { useHistory, useLocation } from "react-router-dom";
import { useSnackbar } from 'notistack';

import CloseIcon from '@mui/icons-material/Close';

import { LOGIN } from "../../../GraphQL/queries";

import { ACTION_LOGIN, DIALOGS_PATH, PAGE_HOME } from "../../../constants";
import { getGraphQLError, useAuth } from "../../../utils";
import { IconButton } from "@mui/material";

export const useLogin = ({
  onCompleted,
  onError,
  ...props
} = {}) => {
  const { authDispatch } = useAuth();
  const history = useHistory();
  const location = useLocation();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const getErrorAction = key => (
    <IconButton
      aria-label="close snackbar"
      onClick={() => closeSnackbar(key)}
      size="small"
      sx={{
        color: 'white',
      }}
    >
      <CloseIcon fontSize="small" />
    </IconButton>
  );

  const [login, {data, loading, ...rest }] = useLazyQuery(LOGIN, {
    onError(err) {
      onError
        ? onError(err)
        : enqueueSnackbar(
          getGraphQLError(err),
          {
            variant: 'error',
            preventDuplicate: true,
            action: getErrorAction,
          },
        );
    },
    onCompleted(variables) {
      onCompleted && onCompleted(variables);

      authDispatch({type: ACTION_LOGIN, payload: data?.login});

      history.push({
        pathname: location.state?.backPathname ?? `${PAGE_HOME}${data?.login?.username}${DIALOGS_PATH}`,
        search: location.search,
      })
    },
    ...props,
  })

  return {
    login,
    isLoading: loading,
    data: data?.login,
    ...rest,
  };
};
