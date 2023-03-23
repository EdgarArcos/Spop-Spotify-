import { Link } from "react-router-dom";
import { ButtonCancel } from "../components/Profile/Buttons/ButtonCancel";
import { ButtonSave } from "../components/Profile/Buttons/ButtonSave";
import { ActualPassword } from "../components/Profile/Inputs/ActualProfile/ActualPassword";
import NewPassword from "../components/Profile/Inputs/EditProfile/NewPassword";

export const ResetPassword = () => {
  return (
    <>
      <div
        className="sm:flex sm:flex-col sm:items-center sm:content-center sm:space-y-0
      flex flex-col items-center content-center space-y-2"
      >
        <h2 className="sm:text-5xl sm:mb-20 text-5xl sm:mt-10 mb-10">
          Reset password
        </h2>
        <ActualPassword />
        <NewPassword />
      </div>
      <div className="sm:flex sm:flex-col sm:items-center flex flex-col items-center">
        <div className="sm:flex sm:flex-row sm:space-x-24 sm:mt-20 sm:mb-10 flex flex-col mt-20 mb-10">
          <Link to={"/editprofile"}>
            <ButtonCancel />
          </Link>
          <Link to={"/profile"}>
            <ButtonSave />
          </Link>
        </div>
      </div>
    </>
  );
};
