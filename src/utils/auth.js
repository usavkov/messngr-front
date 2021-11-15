import { createContext, useReducer, useContext } from 'react';
import { ACTION_LOGIN, ACTION_LOGOUT } from '../constants';

const AuthContext = createContext();

const authReducer = (state, action ) => {
  switch(action.type) {
    case ACTION_LOGIN:
      localStorage.setItem('token', action.payload?.login?.token)
      return { ...state, user: action.payload }
    case ACTION_LOGOUT:
      return { ...state, user: null }
    default:
      throw new Error(`Cannot to recognize ${action.type} action type`)
  }
}

export const AuthProvider = ({children}) => {
  const [state, dispatch] = useReducer(authReducer, { user: null });

  return (
    <AuthContext.Provider value={[state, dispatch]}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext);
