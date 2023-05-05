import { ProfilePicture } from "./ProfilePicture";
import { UserInput } from "./UserInput";
import { IoCloseOutline } from "react-icons/io5";

export const EditUserInfo = ({ editUserInfo }) => {
  return (
    <div className="absolute top-0 w-screen h-full bg-newblack flex flex-col items-center justify-start z-50">
      <div className="w-full p-2 flex align-middle justify-between">
        <IoCloseOutline className="text-3xl" />{" "}
        <p className="flex items-center">Edit the profile</p>{" "}
        <p className="text-xs flex items-center">Save</p>
      </div>
      <ProfilePicture />
      <UserInput />
    </div>
  );
};
