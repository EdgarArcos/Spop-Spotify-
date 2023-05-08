import { UsersContext } from "../../context/UsersContext";
import { useContext } from "react";
import { BiUser } from "react-icons/bi";

export const ImgProfile = () => {
  const { user } = useContext(UsersContext);

  return (
    <div className="mx-4 mb-2 bg-gray-200 flex items-center justify-center rounded-full w-32 h-32 overflow-hidden min-[650px]:shadow-md min-[650px]:shadow-slate-600 md:w-52 md:h-52 lg:w-60 lg:h-60">
      {user && user.img ? (
        <img src={user.img} alt="Profile image" className="object-cover" />
      ) : (
        <BiUser className="text-teal text-[4rem] md:text-[7rem] lg:text-[8rem]" />
      )}
    </div>
  );
};
