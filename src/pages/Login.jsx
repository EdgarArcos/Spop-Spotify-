import React from 'react'
import { ButtonLogin } from '../components/Login/ButtonLogin'
import { LogoResponsive } from "../components/Logo/LogoResponsive";
export const Login = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <LogoResponsive />
      <div className='text-center'>
        <h2 className='text-2xl'>Login</h2>
        <ButtonLogin />
      </div>
    </div>
  )
}
