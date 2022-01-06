import React from 'react';
import { useLazyQuery } from '@apollo/client';
import { useSnackbar } from 'notistack';

import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';

import { LOGIN } from '../../../GraphQL/queries';
import { getGraphQLError } from '../../../utils';
import { useAuth } from '../useAuth';

export const useLogin = ({ onCompleted, onError, ...props } = {}) => {
  const auth = useAuth();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const getErrorAction = (key) => (
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

  const [login, { data, loading, ...rest }] = useLazyQuery(LOGIN, {
    onError(err) {
      onError
        ? onError(err)
        : enqueueSnackbar(getGraphQLError(err), {
          variant: 'error',
          preventDuplicate: true,
          action: getErrorAction,
        });
    },
    onCompleted(variables) {
      onCompleted && onCompleted(variables);

      auth.login(data?.login);
    },
    ...props,
  });

  return {
    login,
    isLoading: loading,
    data: data?.login,
    ...rest,
  };
};
