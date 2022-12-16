import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import React, { useContext, useState } from "react";
import "../firebase";

const AuthContext = React.createContext();

const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);

  // Signup Function
  const signup = async (email, password, username) => {
    const auth = getAuth();
    await createUserWithEmailAndPassword(auth, email, password);
  };

  return <AuthContext.Provider>{!loading && children}</AuthContext.Provider>;
};
