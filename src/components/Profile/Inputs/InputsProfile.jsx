import Password from "../Inputs/Password";
import { Username } from "./Username";
import { Email } from "./Email";
import { Country } from "./Country";

export const InputsProfile = () => {
  return (
    <>
      <div
        className="sm:flex sm:flex-col sm:items-center sm:content-center sm:space-y-0
      flex flex-col items-center content-center space-y-2"
      >
        <br />
        <Username />
        <Email />
        <Password />
        <Country />
        <br />
      </div>
    </>
  );
};
