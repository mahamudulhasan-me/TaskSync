import { getAuth } from "firebase/auth";
import React, { createContext } from "react";
export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = () => {
  return <div></div>;
};

export default AuthProvider;
