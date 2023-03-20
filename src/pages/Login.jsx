import React from 'react'
import { Link } from 'react-router-dom'
import { ButtonLogin } from '../components/Login/ButtonLogin'
import { InputsLogin } from '../components/Login/InputsLogin'
import  Slogo  from "../assets/testimg/logo3.png";
import  Fulllogo  from "../assets/testimg/fulllogo.png";

export const Login = () => {
  return (
      <div className='flex justify-center items-center h-screen'>
        <img className='absolute top-20 w-0 max-[390px]:w-48 ' src={Slogo} alt="Logo" />
        <img className='absolute top-20 w-96 max-[390px]:w-0' src={Fulllogo} alt="Logo" />
        <div className='text-center'>
        <h2 className='text-2xl'>Login</h2>
        <InputsLogin/>
        <ButtonLogin/>
        <p className=' text-gray-400 '>Or </p>
        <h1>*Google count*</h1>
        <p>Don't have an account? <Link className='text-teal' to={"/register"}>Register</Link></p>
        </div>
        </div>
  )
}
