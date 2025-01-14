import { createContext, useState } from "react";
import { AuthContextProps, AuthProviderProps } from "./types";
import { Role, User } from "src/Types/backend";

export const AuthContext = createContext<AuthContextProps | null>(null);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [loggedUser, setLoggedUser] = useState<User | null>({
    id: "1",
    role: Role.ADMIN,
  });

  const initializeUser = (userData: User) => {
    setLoggedUser(userData);
  };

  const getUserRole = () => {
    return loggedUser ? loggedUser.role : null;
  };

  const userRole = getUserRole();
  const isAdmin = userRole === Role.ADMIN;

  return (
    <AuthContext.Provider
      value={{ initializeUser, getUserRole, userRole, isAdmin }}
    >
      {children}
    </AuthContext.Provider>
  );
};
