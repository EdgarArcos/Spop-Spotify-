import React from 'react'
import { ButtonCreate } from '../components/Register/buttonCreate'
import { Inputs } from '../components/Register/Inputs'

export const Register = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
    <div className='text-center'>
    <h2 className='text-2xl'>Create an account</h2>
    <Inputs placeholder='Name'/>
    <ButtonCreate/>
    </div>
    </div>
  )
}
