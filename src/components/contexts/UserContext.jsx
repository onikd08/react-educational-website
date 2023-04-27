import React, { createContext, useEffect, useState } from "react";
import app from "../../firebase/firebase.config";
import { getAuth, onAuthStateChanged, signInWithPopup } from "firebase/auth";

const auth = getAuth(app);

export const AuthContext = createContext();

const UserContext = ({ children }) => {
  const [user, setUser] = useState(null);

  const thirdPartyLogin = (provider) => {
    return signInWithPopup(auth, provider);
  };

  useEffect(() => {
    const subscription = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log(currentUser);
    });
    return () => subscription();
  }, []);

  const authInfo = { user, thirdPartyLogin };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default UserContext;