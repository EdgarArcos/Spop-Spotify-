import { useState } from "react";
import { HiOutlineLockClosed } from "react-icons/hi";
import { AiFillEyeInvisible } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";

export const ActualPassword = () => {
  const inputClass =
    "sm:transition sm:duration-500 sm:hover:opacity-70 sm:bg-newgray sm:my-6 sm:w-80 sm:h-14 sm:rounded-lg sm:border sm:border-teal sm:outline-none sm:indent-8 transition duration-500 hover:opacity-70 bg-newgray my-2 w-80 h-12 rounded-lg border border-teal outline-none indent-8";
  const iconClass =
    "sm:absolute sm:top-11 sm:insert-y-0 sm:left-2 sm:align-top absolute top-6 insert-y-0 left-2 align-top";
  const passToggle =
    "sm:absolute sm:top-11 sm:insert-y-0 sm:left-72 sm:align-top absolute top-6 insert-y-0 left-72 align-top";

  const [actualPasswordType, setActualPasswordType] = useState("password");
  const [actualPasswordInput, setActualPasswordInput] = useState("");
  const handleActualPasswordChange = (event) => {
    setActualPasswordInput(event.target.value);
  };
  const toggleActualPassword = () => {
    if (actualPasswordType === "password") {
      setActualPasswordType("text");
      return;
    }
    setActualPasswordType("password");
  };
  return (
    <div
      className="sm:flex sm:flex-col sm:items-center sm:content-center
      flex flex-col items-center content-center"
    >
      <h2>Actual password</h2>
      <div className="relative">
        <input
          type={actualPasswordType}
          onChange={handleActualPasswordChange}
          value={actualPasswordInput}
          name="password"
          className={inputClass}
          placeholder="Actual password"
        />
        <button className={passToggle} onClick={toggleActualPassword}>
          {actualPasswordType === "password" ? (
            <AiFillEye />
          ) : (
            <AiFillEyeInvisible />
          )}
        </button>
        <div className={iconClass}>
          <HiOutlineLockClosed />
        </div>
      </div>
    </div>
  );
};
