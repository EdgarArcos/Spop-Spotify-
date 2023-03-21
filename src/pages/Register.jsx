import React from 'react'
import { ButtonCreate } from '../components/Register/buttonCreate'
import { Inputs } from '../components/Register/InputsRegister'

export const Register = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
    <img className='absolute top-40' src="" alt="" />
    <div className='text-center'>
    <h2 className='text-2xl'>Create an account</h2>
    <Inputs/>
    <ButtonCreate/>
    </div>
    </div>
  )
}
