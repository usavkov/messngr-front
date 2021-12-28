import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import jwt from 'jwt-decode';

import { useStorageItem } from '../common/hooks';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const { item, setItem, removeItem } = useStorageItem('token');
  
  useEffect(() => {
    console.log("effect");
    console.log('item', item);
    
    if (item) {
      const decoded = jwt(item);
      const expDate = new Date(decoded.exp * 1000)

      setUser(new Date() < expDate ? decoded : null);
    } else {
      setUser(null)
    }
  }, [item]);
  
  const login = useCallback(
    (token) => setItem(token),
    [setItem],
  );

  const logout = useCallback(
    () => removeItem(),
    [removeItem],
  );

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext);
