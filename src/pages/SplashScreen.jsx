import React from 'react'
import fulllogo from "../assets/testimg/fulllogo.png"
import logo from "../assets/testimg/logo3.png"

export const SplashScreen = () => {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <img className="hidden sm:flex items-center w-2/4" src={fulllogo} alt="fulllogo" />
      <img  className="flex w-2/4 sm:hidden" src={logo} alt="fulllogo" />
      <p>Is loading...</p>
    </div>
  )
}
