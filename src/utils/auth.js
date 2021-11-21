import { createContext, useReducer, useContext } from 'react';
import { ACTION_LOGIN, ACTION_LOGOUT } from '../constants';
import jwt from 'jwt-decode';

const AuthContext = createContext();

let user;

if (localStorage.token) {
  const decoded = jwt(localStorage.token);
  const expDate = new Date(decoded.exp * 1000)
  
  user = new Date() < expDate ? decoded : null;
} else {
  user = null;
}

const authReducer = (state, action ) => {
  switch(action.type) {
    case ACTION_LOGIN:
      localStorage.setItem('token', action.payload?.login?.token)
      return { ...state, user: action.payload }
    case ACTION_LOGOUT:
      localStorage.removeItem('token')
      return { ...state, user: null }
    default:
      throw new Error(`Cannot to recognize ${action.type} action type`)
  }
}

export const AuthProvider = ({children}) => {
  const [state, dispatch] = useReducer(authReducer, user);

  return (
    <AuthContext.Provider value={{ user: state, authDispatch: dispatch }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext);
