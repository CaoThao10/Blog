import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebase-config";

const { createContext, useContext, useState, useEffect } = require("react");

const AuthContext = createContext();
function AuthProvider(props) {
  const [userInfo, setUserInfo] = useState({});
  const value = { userInfo, setUserInfo };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUserInfo(user);
    });
  });
  return <AuthContext.Provider value={value} {...props}></AuthContext.Provider>;
}

function useAuth() {
  const context = context(AuthContext);
  if (typeof context === "undifined")
    throw new console.error("useAuth must be used within AuthProvider");
  return context;
}

export { AuthProvider, useAuth };
