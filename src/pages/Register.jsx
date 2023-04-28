import React from "react";
import { Link } from "react-router-dom";
import { LogoResponsive } from "../components/Logo/LogoResponsive";
import { Inputs } from "../components/Register/InputsRegister";

export const Register = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-screen">
      <LogoResponsive />
      <div className="text-center">
        <h2 className="text-2xl">Create an account</h2>
        <Inputs />
        <p>
          Do you have an account?{" "}
          <Link className="text-teal" to={"/login"}>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};
