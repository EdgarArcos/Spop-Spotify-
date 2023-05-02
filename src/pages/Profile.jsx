import { Link, useNavigate } from "react-router-dom";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { ProfilePicture } from "../components/Profile/ProfilePictureSet/ProfilePicture";
import { ButtonLogout } from "../components/Profile/Buttons/ButtonLogout";
import { ButtonEditProfile } from "../components/Profile/Buttons/ButtonEditProfile";
import { InputsActualProfile } from "../components/Profile/Inputs/ActualProfile/InputsActualProfile";

export const Profile = ({ setUsers, setEmail }) => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("users");
    localStorage.removeItem("email");
    setUsers;
    setEmail;
    navigate("/profile");
  };

  return (
    <>
      <Link to={"/"}>
        <BsFillArrowLeftCircleFill
          className="sm:absolute sm:z-10 sm:cursor-pointer sm:h-20 sm:w-10 sm:hover:opacity-60 sm:transition sm:duration-500 sm:mt-0 sm:ml-20
    absolute z-10 mt-0 ml-5 cursor-pointer h-20 w-10 hover:opacity-60 transition duration-500"
        />
      </Link>
      <ProfilePicture />
      <ButtonLogout logout={logout} />
    </>
  );
};
