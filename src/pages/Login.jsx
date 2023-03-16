import React from 'react'

export const Login = () => {
  return (
      <div className='flex justify-center items-center h-screen'>
        <div className='text-center'>
        <h2>Create an account</h2>
        <div>
          <p>Name:</p>
          <input type="text"/>
        </div>
        <div>
          <p>Email:</p>
          <input type="text"/>
        </div>
        <div>
          <p>Password:</p>
          <input type="text"/>
        </div>
        <div>
          <p>Confirm password:</p>
          <input type="text"/>
        </div>
        <div>
          <button className='bg-indigo-500' >Create</button>
        </div>
        </div>
        </div>
  )
}
