import { createContext, useState } from "react";

export const UsersContext = createContext();

export const UsersProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const auth0Login = (user) => {
    setUser(user)
}

  return (
    <UsersContext.Provider value={{ auth0Login }}>
      {children}
    </UsersContext.Provider>
  );
};