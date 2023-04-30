
import React, { useContext, useState } from "react";
import profileimage from "./set-profile-picture.png"
import { editImgFetch } from "../../../api/userRequests"; 
import { UsersContext } from "../../../context/UsersContext";




export const ProfilePicture = () => {

  const { user } = useContext(UsersContext);
  const [profileimg, setProfileImg] = useState(null);

  const handleEditImage = (e) => {
    console.log(user)
    const data = new FormData();
    data.append("file", e.target.files[0]);
    data.append("userId",  user && user.userId); 
    editImgFetch(data)
      .then(response => {
        setProfileImg(response.data.img);
      })
      .catch(error => {
        console.log(error);
        
      });
  };


  return (
    <div className="sm:pt-20 pt-10 pb-16 ">
      <div className="sm:m-auto sm:rounded-full sm:w-40 sm:h-40 m-auto rounded-full w-40 h-40">
        {user && user.img && (
          <img
            src={profileimage || user.img}
            alt="Profile image"
            className="sm:object-cover sm:border-2 sm:border-teal sm:rounded-full sm:w-40 sm:h-40 object-cover border-2 border-teal rounded-full w-40 h-40"
          />
        )}
      </div>
      <div className="sm:flex sm:justify-center flex justify-center">
        <label
          className="sm:-mt-40 sm:cursor-pointer sm:rounded-full sm:w-40 sm:h-40 -mt-40 cursor-pointer rounded-full w-40 h-40"
          htmlFor="input"
        >
          <input type="file" onChange={handleEditImage} />
        </label>
      </div>
    </div>
  )
}