import React, { useContext } from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { auth0loginRequest } from '../../api/userRequests';
import { UsersContext } from '../../context/UsersContext';

export const ButtonLogin = () => {
  const { loginWithRedirect, user} = useAuth0();
  const { auth0Login } = useContext(UsersContext);

  const handleLogin = async () => {
    await loginWithRedirect();
    
    // if (user) {
    //   const { name, email } = user;
    //   const response = await auth0loginRequest({ name, email });
    //   console.log(user);
    //   if (response && response.data.user) {
        
    //     console.log(response.data.user);
    //     auth0Login(response.data.user);
    //   } else {
    //     console.log("Error");
    //   }
    // }
    
  };

  return (
    <div>
      <button onClick={handleLogin} className=' my-10 bg-transparent w-80 border-2 border-teal rounded-lg text-2xl hover:bg-teal'><p className='py-2 px-5 text-teal hover:text-black'>Log in</p></button>
    </div>
  );
};





