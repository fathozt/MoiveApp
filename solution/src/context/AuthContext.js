import { useEffect, useState } from "react";
import { createContext } from "react";
import { userObserver } from "../auth/firbase";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(
    sessionStorage.getItem("user")
  );

  useEffect(() => {
    // setCurrentUser(JSON.parse(sessionStorage.getItem("user")));
    userObserver(setCurrentUser);
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
}
