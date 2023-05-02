import { Link, useNavigate } from "react-router-dom";
import { ButtonCancel } from "../components/Profile/Buttons/ButtonCancel";
import { ButtonSave } from "../components/Profile/Buttons/ButtonSave";
import { InputsEditProfile } from "../components/Profile/Inputs/EditProfile/InputsEditProfile";
import { ProfilePicture } from "../components/Profile/ProfilePictureSet/ProfilePicture";
import { useContext, useEffect, useState } from "react";
import { makeRequest } from "../api/api-utils";
import axios from "axios";
import { UsersContext } from "../context/UsersContext";

export const EditProfile = () => {
  const navigate = useNavigate();
  const {user} = useContext(UsersContext);
  const [userData, setUserData] = useState(user.name);
  const handleInputsData = (event) => {
    setUserData(event.target.value);
  };

  // useEffect(() => {
  //   makeRequest("user").then((data) => setUser(data[0]));
  // }, []);

  // const saveChanges = () => {
  //   axios.put(`http://localhost:3000/user/${user.id}`, user);
  //   navigate("/profile");
  // };

  return (
    <>
      <ProfilePicture />
      <InputsEditProfile
        user={userData}
        handleInputsData={handleInputsData}
      />
      {/* <div className="sm:flex sm:flex-col sm:items-center flex flex-col items-center">
        <Link to={"/resetpassword"}>
          <button
            type="button"
            className="sm:w-40 sm:border sm:border-teal sm:rounded-lg sm:text-1xl sm:bg-graytext sm:hover:opacity-60 sm:transition sm:duration-500 sm:mb-5
              w-40 border border-teal rounded-lg text-1xl hover:opacity-60 transition duration-500 mb-5"
          >
            <p className="sm:py-2 sm:px-5 sm:text-white py-2 px-5 text-white">
              Reset password
            </p>
          </button>
        </Link>
        <div className="sm:flex sm:flex-row sm:space-x-24 sm:mt-10 sm:mb-10 flex flex-col mt-10 mb-10">
          <Link to={"/profile"}>
            <ButtonCancel />
          </Link>
          <ButtonSave saveChanges={saveChanges} />
        </div>
      </div> */}
    </>
  );
};
