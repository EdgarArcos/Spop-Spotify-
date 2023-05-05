import { useContext } from "react";
import { ProfilePicture } from "./ProfilePicture";
import profileimage from "./set-profile-picture.png";
import { IoArrowBackOutline } from "react-icons/io5";
import { UsersContext } from "../../context/UsersContext";

export const HeaderProfile = () => {
  const { user } = useContext(UsersContext);

  console.log(user)
  return (
    <section className="flex flex-col">
      <IoArrowBackOutline />
      <div className="flex">
        <div className="bg-[url(profileimage)] m-4 rounded-full w-32 h-32 overflow-hidden">
          {user && user.img && (
            <img
              src={user.img}
              alt="Profile image"
              className="object-cover w-32 h-32"
            />
          )}
        </div>
        <div className="flex flex-col justify-center">
          <h2>{user && user.name}</h2>
          <h3 className="flex">
            <span>21</span> followers <span>·</span>
            <span>21</span>following
          </h3>
        </div>
      </div>
      <button>Edit</button>
    </section>
  );
};
