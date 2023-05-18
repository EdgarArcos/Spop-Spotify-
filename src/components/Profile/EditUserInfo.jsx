import { useScreenWidth } from '../../hooks/useScreenWidth';
import { ProfilePicture } from './ProfilePicture';
import { UserInput } from './UserInput';
import { IoCloseOutline } from 'react-icons/io5';

export const EditUserInfo = ({ handleEditUserInfo }) => {
  const screenWidth = useScreenWidth();
  return (
    <div className="w-screen h-screen fixed top-0 left-0 z-20">
      <div
        className="w-screen h-screen absolute top-0 left-0 z-30 bg-newgray opacity-50"
        onClick={screenWidth > 640 && handleEditUserInfo}
      ></div>
      <div className="w-full h-full bg-newblack opacity-100 absolute top-0 left-0 flex flex-col items-center justify-start z-50 min-[640px]:w-[60%] min-[640px]:left-[20%] min-[640px]:shadow-lg min-[640px]:shadow-slate-500 min-[640px]:h-[70%] min-[640px]:top-[15%] lg:flex-row xl:w-[50%] xl:left-[25%]">
        <span className="w-full p-2 flex align-middle justify-start hover:text-teal lg:align-start lg:h-full lg:w-10 lg:pr-0">
          <IoCloseOutline
            className="text-3xl cursor-pointer"
            onClick={handleEditUserInfo}
          />{' '}
        </span>
        <ProfilePicture />
        <UserInput />
      </div>
    </div>
  );
};
