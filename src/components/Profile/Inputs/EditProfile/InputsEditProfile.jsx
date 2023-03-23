import { EditEmail } from "./EditEmail";
import { EditUsername } from "./EditUsername";

export const InputsEditProfile = ({ user, setUser, handleInputsData }) => {
  return (
    <>
      <div
        className="sm:flex sm:flex-col sm:items-center sm:content-center sm:space-y-0
      flex flex-col items-center content-center space-y-2"
      >
        <br />
        <EditUsername
          username={user.first_name}
          handleInputsData={handleInputsData}
        />
        <EditEmail email={user.email} handleInputsData={handleInputsData} />
        <br />
      </div>
    </>
  );
};
