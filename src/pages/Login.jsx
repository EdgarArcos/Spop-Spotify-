import React from 'react'
import { ButtonLogin } from '../components/Login/ButtonLogin'
import { InputsLogin } from '../components/Login/InputsLogin'

export const Login = () => {
  return (
      <div className='flex justify-center items-center h-screen'>
        <img className='absolute top-40' src="" alt="" />
        <div className='text-center'>
        <h2 className='text-2xl'>Login</h2>
        <InputsLogin/>
        <ButtonLogin/>
        <p className=' text-gray-400 '>Or </p>
        <h1>*Google count*</h1>
        </div>
        </div>
  )
}
