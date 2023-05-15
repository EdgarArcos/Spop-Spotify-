import { useContext } from "react";
import { IoArrowBackOutline } from "react-icons/io5";
import { UsersContext } from "../../context/UsersContext";
import { RiLogoutCircleLine } from "react-icons/ri";
import { useAuth0 } from "@auth0/auth0-react";
import { ImgProfile } from "./ImgProfile";
import { useNavigate } from "react-router-dom";

export const HeaderProfile = ({ handleEditUserInfo }) => {
  const { user } = useContext(UsersContext);
  const navigate = useNavigate();

  const { logout } = useAuth0();

  return (
    <section className="flex flex-col">
      <div className="flex items-center justify-between p-3 min-[640px]:justify-end">
        <IoArrowBackOutline
          className="text-2xl cursor-pointer min-[640px]:hidden"
          onClick={() => navigate(-1)}
        />
        <RiLogoutCircleLine
          className="text-xl ml-5 hover:text-teal cursor-pointer lg:text-2xl"
          onClick={logout}
        />
      </div>
      <div className="flex">
        <ImgProfile />
        <div className="flex flex-col justify-evenly lg:pl-2">
          <div>
            <h2 className="text-lg md:text-2xl lg:text-5xl xl:text-6xl">
              {user && user.name}
            </h2>
            <h3 className="flex text-xs lg:text-sm">
              <span className="pr-1 font-medium">21</span> followers{" "}
              <span className="px-2 font-bold">·</span>
              <span className="pr-1 font-medium">21</span>following
            </h3>
          </div>

          <button
            className="border rounded-full w-14 text-xs py-1 lg:text-sm hover:text-teal hover:border-teal"
            onClick={handleEditUserInfo}
          >
            Edit
          </button>
        </div>
      </div>
    </section>
  );
};
