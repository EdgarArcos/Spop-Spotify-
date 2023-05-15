import { createContext, useState } from 'react';

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

  const editFollowedPlaylists = (newFollowedPlaylists) => {
    setUser({ ...user, followedPlaylists: newFollowedPlaylists });
  };

  return (
    <UsersContext.Provider
      value={{ auth0Login, user, editImg, editUsername, editFollowedPlaylists }}
    >
      {children}
    </UsersContext.Provider>
  );
};
