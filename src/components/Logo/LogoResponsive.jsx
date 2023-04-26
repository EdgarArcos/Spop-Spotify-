import React from "react";
import Slogo from "../../assets/testimg/logo3.png";
import Fulllogo from "../../assets/testimg/fulllogo.png";
import { useScreenWidth } from "../../hooks/useScreenWidth";

export const LogoResponsive = () => {
  const screenWidth = useScreenWidth();
  return (
    <div className="rounded-lg">
      {screenWidth < 640 ? (
        <img className="" src={Slogo} alt="Logo" />
      ) : (
        <img className="w-96" src={Fulllogo} alt="Logo" />
      )}
    </div>
  );
};
