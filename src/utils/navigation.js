import { useState } from 'react';
import { createContext, useContext } from 'react';
import { useNavigationLinks } from '../common/hooks/useNavigationLinks';

const NavContext = createContext();

export const NavProvider = ({ children }) => {
  const links = useNavigationLinks()

  return (
    <NavContext.Provider value={{ links }}>
      {children}
    </NavContext.Provider>
  );
};

export const useNavigation = () => useContext(NavContext);
