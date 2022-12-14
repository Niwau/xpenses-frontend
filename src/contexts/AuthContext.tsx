import { createContext, useCallback, useEffect, useState } from "react";
import { AuthContextType, AuthProviderProps } from "../types/auth.types";

export const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider = ({ children } : AuthProviderProps) => {
  
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if(token) {
      setIsAuthenticated(true)
    }

  }, [])

  const handleAuthentication = useCallback((value: boolean) => {
    setIsAuthenticated(value)
  }, [])

  return (
    <AuthContext.Provider value={{ isAuthenticated, handleAuthentication }}>
      { children }
    </AuthContext.Provider>
  )
}