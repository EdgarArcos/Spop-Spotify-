import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import { FiMail } from "react-icons/fi";
import { HiOutlineLockClosed } from "react-icons/hi";
import { BsCalendar } from "react-icons/bs";
import { GiWorld } from "react-icons/gi";

export const Profile = () => {
  const inputClass =
    "transition duration-500 hover:opacity-70 bg-newgray my-2 w-80 h-12 rounded-lg border border-teal outline-none indent-8   sm:transition sm:duration-500 sm:hover:opacity-70 sm:bg-newgray sm:my-6 sm:w-80 sm:h-14 sm:rounded-lg sm:border sm:border-teal sm:outline-none sm:indent-8";
  const iconClass =
    "absolute top-6 insert-y-0 left-2 align-top   sm:absolute sm:top-11 sm:insert-y-0 sm:left-2 sm:align-top";

  

  return (
    <>
      <BsFillArrowLeftCircleFill className="sm:mt-0 sm:ml-20 cursor-pointer h-20 w-10 hover:opacity-60 transition duration-500   sm:mt-0 sm:ml-20 sm:cursor-pointer sm:h-20 sm:w-10 sm:hover:opacity-60 sm:transition sm:duration-500" />
      <div className="flex flex-col items-center content-center    sm:flex sm:flex-col ">
        <h2 className="text-2xl  sm:text-4xl">Profile</h2>
        <br />
        <div className="rounded-full border-solid w-20 border-white bg-white text-8xl  sm:rounded-full sm:border-solid sm:border-white sm:bg-white sm:text-8xl">
          O
        </div>
      </div>
      <br />

      <div className="flex flex-col items-center content-center  sm:flex sm:flex-col sm:items-center sm:content-center">
        <br />
        <div className="relative">
          <input type="text" value='Username' disabled className={inputClass} />
          <div className={iconClass}>
            <BiUser />
          </div>
        </div>
        <div className="relative">
          <input type="text" value='Email' className={inputClass} />
          <div className={iconClass}>
            <FiMail />
          </div>
        </div>

        <h2>Reset password</h2>
        <div className="relative">
          <input type="text" value="Password" className={inputClass} />
          <div className={iconClass}>
            <HiOutlineLockClosed />
          </div>
        </div>

        <div className="relative">
          <input
            type="text"
            value="Confirm password"
            className={inputClass}
          />
          <div className={iconClass}>
            <HiOutlineLockClosed />
          </div>
        </div>

        <div className="flex flex-col items-center content-center p-0  sm:flex sm:flex-col sm:items-center sm:content-center sm:p-0">
          <h2>Birthdate</h2>
          <div className="relative">
            <input type="text" value="dd/mm/yy" className={inputClass} />
            <div className={iconClass}>
              <BsCalendar />
            </div>
          </div>
        </div>
        <div className="relative">
          <input
            type="text"
            value="Country or region"
            className={inputClass}
          />
          <div className={iconClass}>
            <GiWorld />
          </div>
        </div>
        <br />
        <div className="flex space-x-8  sm:flex sm:space-x-24">
          <button
            type="button"
            hrefLang=""
            className="bg-cancel my-2 w-20 h-10 border rounded-full border-cancel outline-none hover:opacity-60 transition duration-500  sm:bg-cancel sm:my-4 sm:w-40 sm:h-14 sm:px-12 sm:hover:opacity-60 sm:transition sm:duration-500"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-teal my-2 w-20 h-10 text-center border rounded-full border-teal outline-none text-black hover:opacity-60 transition duration-500  sm:bg-teal sm:my-4 sm:w-40 sm:h-14 sm:px-8 sm:border sm:rounded-full sm:border-teal sm:outline-none sm:text-black sm:hover:opacity-60 sm:transition sm:duration-500"
          >
            Save
          </button>
        </div>
        <div className="flex space-x-8  sm:flex sm:space-x-24">
        <button
          type="button"
          hrefLang=""
          className="bg-cancel my-2 w-20 h-10 border rounded-full border-cancel outline-none hover:opacity-60 transition duration-500  sm:bg-cancel sm:my-4 sm:w-40 sm:h-14 sm:px-12 sm:border sm:rounded-full sm:border-cancel sm:outline-none sm:hover:opacity-60 sm:transition sm:duration-500"
        >
          Log out
        </button>
        <button
          type="submit"
          className="bg-teal my-2 w-20 h-10 text-center border rounded-full border-teal outline-none text-black hover:opacity-60 transition duration-500  sm:bg-teal sm:my-4 sm:w-40 sm:h-14 sm:px-8 sm:border sm:rounded-full sm:border-teal sm:outline-none sm:text-black sm:hover:opacity-60 sm:transition sm:duration-500"
        >
          Edit profile
        </button>
      </div>
      </div>
    </>
  );
};
