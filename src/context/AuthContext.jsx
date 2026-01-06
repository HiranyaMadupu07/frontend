import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {

  // TEMP DEMO USER — replace with real login later
  const [user, setUser] = useState({
    name: "Admin User",
    role: "admin"   // client | developer | admin
  });

  return (
    <AuthContext.Provider value={{user,setUser}}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(){
  return useContext(AuthContext);
}
