import { Link } from "react-router-dom";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { ProfilePicture } from "../components/Profile/ProfilePictureSet/ProfilePicture";
import { ButtonLogout } from "../components/Profile/Buttons/ButtonLogout";
import { ButtonEditProfile } from "../components/Profile/Buttons/ButtonEditProfile";
import { ButtonCancel } from "../components/Profile/Buttons/ButtonCancel";
import { ButtonSave } from "../components/Profile/Buttons/ButtonSave";
import { InputsProfile } from "../components/Profile/Inputs/InputsProfile";

export const Profile = () => {
  return (
    <>
      <Link to={"/"}>
        <BsFillArrowLeftCircleFill
          className="sm:absolute sm:z-10 sm:cursor-pointer sm:h-20 sm:w-10 sm:hover:opacity-60 sm:transition sm:duration-500 sm:mt-0 sm:ml-20
    absolute z-10 mt-0 ml-5 cursor-pointer h-20 w-10 hover:opacity-60 transition duration-500"
        />
      </Link>
      <ProfilePicture />
      <InputsProfile />
      <div className="sm:flex sm:flex-col sm:items-center flex flex-col items-center">
        <div className="sm:flex sm:flex-row sm:space-x-24 sm:mb-10 flex flex-col mb-10">
          <ButtonEditProfile />
          <ButtonLogout />
        </div>
        <div className="sm:flex sm:flex-row sm:space-x-24 sm:mb-10 sm:hidden flex flex-col mb-10 hidden">
          <ButtonCancel />
          <ButtonSave />
        </div>
      </div>
    </>
  );
};
