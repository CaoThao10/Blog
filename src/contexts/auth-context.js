import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../firebase/firebase-config";
import { collection, onSnapshot, query, where } from "firebase/firestore";

const { createContext, useContext, useState, useEffect } = require("react");

const AuthContext = createContext();
function AuthProvider(props) {
  const [userInfo, setUserInfo] = useState({});
  const value = { userInfo, setUserInfo };
  useEffect(() => {
    onAuthStateChanged(
      auth,
      (user) => {
        if (user) {
          const docRef = query(
            collection(db, "users"),
            where("email", "==", user.email)
          );
          onSnapshot(docRef, (snapshot) => {
            snapshot.forEach((doc) => {
              setUserInfo({
                ...user,
                ...doc.data(),
              });
            });
          });
          // setUserInfo(user);
        } else {
          setUserInfo(null);
        }
      },
      []
    );
  });
  return <AuthContext.Provider value={value} {...props}></AuthContext.Provider>;
}

function useAuth() {
  const context = useContext(AuthContext);
  if (typeof context === "undefined")
    throw new console.error("useAuth must be used within AuthProvider");
  return context;
}

export { AuthProvider, useAuth };
