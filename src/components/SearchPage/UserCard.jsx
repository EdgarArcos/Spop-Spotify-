import { BiUser } from "react-icons/bi";

export const UserCard = ({ user }) => {
  return (
    <div className="w-36 h-48 flex flex-col items-start pt-3 shadow-md shadow-newgray rounded-lg cursor-pointer">
      <div className="bg-gray-200 flex items-center self-center justify-center rounded-full w-28 h-28 overflow-hidden">
        {user.img.secure_url ? (
          <img
            src={user.img.secure_url}
            alt="Profile_Image"
            className="object-cover"
          />
        ) : (
          <BiUser className="text-teal text-[4rem] md:text-[7rem] lg:text-[8rem]" />
        )}
      </div>
      <h2 className="text-sm font-semibold p-2">{user.name}</h2>
      <h2 className="text-xs px-2">Profile</h2>
    </div>
  );
};
