import React from 'react'
import  Slogo  from "../../assets/testimg/logo3.png";
import  Fulllogo  from "../../assets/testimg/fulllogo.png";

export const LogoResponsive = () => {
  return (
    <div className='rounded-lg'>
    <img className='absolute top-20 left-32  w-0 max-[390px]:w-36 ' src={Slogo} alt="Logo" />
    <img className='absolute top-20  w-96 max-[390px]:w-0' src={Fulllogo} alt="Logo" />
    </div>
  )
}
