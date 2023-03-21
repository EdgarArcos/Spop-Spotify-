import React from 'react'

export const ButtonCreate = ({saveInputs}) => {
  return (
    <div>
    <button className='bg-transparent w-80 border-2 border-teal rounded-lg text-2xl hover:bg-teal' onClick={saveInputs}><p className=' hover:text-black py-2 px-5 text-teal'>Create</p></button>
    </div>
  )
}
