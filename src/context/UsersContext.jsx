import { createContext, useState } from "react";

export const UsersContext = createContext();

export const UsersProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const auth0Login = (user) => {
    setUser(user);
  };

  const editImg = (imgUploaded) => {
    setUser({ ...user, img: imgUploaded });
  };

  const editUsername = (newName) => {
    setUser({ ...user, name: newName });
  };

  return (
    <UsersContext.Provider value={{ auth0Login, user, editImg, editUsername }}>
      {children}
    </UsersContext.Provider>
  );
};
