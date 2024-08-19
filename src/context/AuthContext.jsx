/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

const AuthenticateContext = createContext();

function AuthenticationProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("currentUser")
  );

  return (
    <AuthenticateContext.Provider
      value={{ isAuthenticated, setIsAuthenticated }}
    >
      {children}
    </AuthenticateContext.Provider>
  );
}

function useIsAuthenticated() {
  const context = useContext(AuthenticateContext);
  if (context === undefined)
    throw new Error(
      "AuthenticateContext can only be used under AuthenticationProvider"
    );
  return context;
}

export { AuthenticationProvider, useIsAuthenticated };
