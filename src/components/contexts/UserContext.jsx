import React, { createContext, useEffect, useState } from "react";
import app from "../../firebase/firebase.config";
import {
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const auth = getAuth(app);

export const AuthContext = createContext();

const UserContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userLoading, setUserLoading] = useState(true);

  const thirdPartyLogin = (provider) => {
    setUserLoading(true);
    return signInWithPopup(auth, provider);
  };

  const logout = () => {
    setUserLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const subscription = onAuthStateChanged(auth, (currentUser) => {
      setUserLoading(false);
      setUser(currentUser);
      console.log(currentUser);
    });
    return () => subscription();
  }, []);

  const authInfo = { user, thirdPartyLogin, logout, userLoading };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default UserContext;
