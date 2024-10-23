import { createContext, useState, useEffect, ReactNode, useRef } from 'react';


import keycloak, { initKeycloak } from '../config/keycloak';

interface AuthContextProps {
  isAuthenticated: boolean;
  keycloakInitialized: boolean;
  login: () => void;
  logout: () => void;
  userInitials: string;
}
const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [keycloakInitialized, setKeycloakInitialized] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userInitials, setUserInitials] = useState('');
  const initRef = useRef(false);

  useEffect(() => {
    if (initRef.current) return; // Prevent re-initialization
    initRef.current = true;

    initKeycloak(() => {
      setIsAuthenticated(keycloak.authenticated ?? false);
      setKeycloakInitialized(true);
      const { tokenParsed } = keycloak;
      setUserInitials(tokenParsed ? tokenParsed.name.split(' ').map((str: string) => str[0]).join('') : '');
    });
  }, []);

  const login = () => {
    keycloak.login();
  };

  const logout = () => {
    keycloak.logout();
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, keycloakInitialized, login, logout, userInitials }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext };
