import { useState } from "react";
import { HiOutlineLockClosed } from "react-icons/hi";
import { AiFillEyeInvisible } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";

export default function Password() {
  const inputClass =
    "sm:transition sm:duration-500 sm:hover:opacity-70 sm:bg-newgray sm:my-6 sm:w-80 sm:h-14 sm:rounded-lg sm:border sm:border-teal sm:outline-none sm:indent-8 transition duration-500 hover:opacity-70 bg-newgray my-2 w-80 h-12 rounded-lg border border-teal outline-none indent-8";
  const iconClass =
    "sm:absolute sm:top-11 sm:insert-y-0 sm:left-2 sm:align-top absolute top-6 insert-y-0 left-2 align-top";
  const passToggle =
    "sm:absolute sm:top-11 sm:insert-y-0 sm:left-72 sm:align-top absolute top-6 insert-y-0 left-72 align-top";

  const [passwordType, setPasswordType] = useState("password");
  const [passwordInput, setPasswordInput] = useState("");
  const handlePasswordChange = (event) => {
    setPasswordInput(event.target.value);
  };
  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  const [passwordConfirmType, setPasswordConfirmType] = useState("password");
  const [passwordConfirmInput, setPasswordConfirmInput] = useState("");
  const handlePasswordConfirmChange = (event) => {
    setPasswordConfirmInput(event.target.value);
  };
  const togglePasswordConfirm = () => {
    if (passwordConfirmType === "password") {
      setPasswordConfirmType("text");
      return;
    }
    setPasswordConfirmType("password");
  };

  return (
    <div
      className="sm:flex sm:flex-col sm:items-center sm:content-center
      flex flex-col items-center content-center"
    >
      <h2>Reset password</h2>
      <div className="relative">
        <input
          type={passwordType}
          onChange={handlePasswordChange}
          value={passwordInput}
          name="password"
          className={inputClass}
          placeholder="Password"
        />
        <button className={passToggle} onClick={togglePassword}>
          {passwordType === "password" ? <AiFillEye /> : <AiFillEyeInvisible />}
        </button>
        <div className={iconClass}>
          <HiOutlineLockClosed />
        </div>
      </div>
      <div className="relative">
        <input
          type={passwordConfirmType}
          onChange={handlePasswordConfirmChange}
          value={passwordConfirmInput}
          name="password"
          className={inputClass}
          placeholder="Confirm password"
        />
        <button className={passToggle} onClick={togglePasswordConfirm}>
          {passwordConfirmType === "password" ? (
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
}
