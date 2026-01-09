import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import * as React from "react";
import { useNavigate } from "@tanstack/react-router";
import {
  getTokenFromLocalStorage,
  verifyToken,
  removeTokenFromLocalStorage,
  setTokenToLocalStorage,
} from "@/lib/auth";

interface User {
  id: string;
  email: string;
  name: string;
}

interface AuthContextType {
  user: User | null;
  login: (token: string) => void;
  logout: () => void;
  isAuthenticated: boolean;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = getTokenFromLocalStorage();
    if (token) {
      const payload = verifyToken(token);
      if (payload) {
        setUser({
          id: payload.userId,
          email: payload.email,
          name: payload.name,
        });
      }
    }
    setIsLoading(false);
  }, []);

  const login = (token: string) => {
    setTokenToLocalStorage(token);
    const payload = verifyToken(token);
    if (payload) {
      setUser({
        id: payload.userId,
        email: payload.email,
        name: payload.name,
      });
    }
  };

  const logout = () => {
    setUser(null);
    removeTokenFromLocalStorage();
    navigate({ to: "/" });
  };

  const value: AuthContextType = {
    user,
    login,
    logout,
    isAuthenticated: !!user,
    isLoading,
  };

  return React.createElement(AuthContext.Provider, { value }, children);
};
