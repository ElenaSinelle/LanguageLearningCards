import { createContext, useState, useContext } from "react";

export const AuthContext = createContext(null);

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);

  const logIn = (newUser, callBack) => {
    setUser(newUser);
    callBack();
  };

  const logOut = (callBack) => {
    setUser(null);
    callBack();
  };

  const value = { user, logIn, logOut };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
