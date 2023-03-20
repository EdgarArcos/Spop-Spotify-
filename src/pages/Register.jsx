import React from 'react'
import { Link } from 'react-router-dom'
import { ButtonCreate } from '../components/Register/buttonCreate'
import { Inputs } from '../components/Register/InputsRegister'
import  fulllogo  from "../assets/testimg/fulllogo.png";

export const Register = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
    <img className='absolute top-10' src={fulllogo} alt="" />
    <div className='text-center'>
    <h2 className='text-2xl'>Create an account</h2>
    <Inputs/>
    <ButtonCreate/>
    <p>Do you have an account? <Link className='text-teal' to={"/login"}>Login</Link></p>
    </div>
    </div>
  )
}
