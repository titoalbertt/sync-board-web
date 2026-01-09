import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import {
  getTokenFromLocalStorage,
  removeTokenFromLocalStorage,
  verifyToken,
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
      } else {
        removeTokenFromLocalStorage();
      }
    }
    setIsLoading(false);
  }, []);

  const login = (token: string) => {
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
  };

  const value = {
    user,
    login,
    logout,
    isAuthenticated: !!user,
    isLoading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
