import { useMemo } from 'react';
import { useHistory } from 'react-router';

import { ACTION_LOGOUT } from '../../constants';
import { useAuth } from '../../utils';

export const useNavigationLinks = () => {
  const { user, authDispatch } = useAuth();
  const history = useHistory();

  const links = useMemo(
    () => ({
      guest: [
        { to: 'login', label: 'Login' },
        { to: 'signup', label: 'Sign up' },
      ],
      authorized: [
        { to: '', label: 'Home' },
        { to: 'admin', label: 'Admin' },
        { to: 'settings', label: 'Settings' },
        {
          to: 'login',
          label: 'Logout',
          onClick: () => {
            authDispatch({ type: ACTION_LOGOUT });
            history.go(0);
          },
        },
      ],
    }),
    [],
  );

  return links[user ? 'authorized' : 'guest'];
};
