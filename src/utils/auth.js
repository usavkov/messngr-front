import { useApolloClient } from '@apollo/client';
import {
  createContext,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import jwt from 'jwt-decode';

import { useStorageItem } from '../common/hooks';
import { DIALOGS_PATH } from '../constants';

export const AuthContext = createContext();

const getDecoded = (item) => {
  const decoded = jwt(item);
  const expDate = new Date(decoded.exp * 1000);

  return new Date() < expDate ? decoded : null;
};

export const AuthProvider = ({ children }) => {
  const location = useLocation();
  const history = useHistory();
  const client = useApolloClient();

  const [user, setUser] = useState(null);
  const { item, setItem, removeItem } = useStorageItem('token');

  useEffect(() => {
    if (item) {
      setUser(getDecoded(item));
    } else {
      setUser(null);
    }
  }, [item]);

  const login = useCallback(
    (token) => {
      setItem(token);

      history.push({
        pathname: (
          location?.state?.backPathname ?? `/user/${getDecoded(token)?.username}${DIALOGS_PATH}`
        ),
        search: location?.search,
      });
    },
    [history, location.search, location.state?.backPathname, setItem],
  );

  const logout = useCallback(() => {
    client.clearStore();
    removeItem();
  }, [client, removeItem]);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
