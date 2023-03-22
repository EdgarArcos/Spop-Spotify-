import React, { useContext } from 'react'
import { UsersContext } from '../../context/UsersContext'
import { EmailContext } from '../../context/EmailContext'
import { BiUser } from "react-icons/bi";
import { IoMailOutline } from "react-icons/io5";
import { HiOutlineLockClosed } from "react-icons/hi";   
import { ButtonCreate } from './ButtonCreate';

export const Inputs = () => {
  const [users, setUsers]  = useContext(UsersContext);
  const [email, setEmail]  = useContext(EmailContext);
  const saveInputs = () =>{
    localStorage.setItem("users", JSON.stringify(users))
    localStorage.setItem("email", JSON.stringify(email))
    console.log(users);
    console.log(email);
    }
  return (
    <form action="saveInputs">
    <div className='relative'>
    <input className='name bg-newgray  my-6 w-80 h-14 rounded-lg border-none placeholder: pl-8' placeholder='Name' value={users} onChange={event => {setUsers (event.target.value);}} required minLength="5"  type="text"/>
    <div className='absolute top-11 insert-y-0 left-2 align-top'><BiUser/></div>
    </div>
    <div className='relative'>
    <input className='email bg-newgray mb-6 w-80 h-14 rounded-lg placeholder: pl-8' placeholder='Email' value={email} onChange={Email => {setEmail (Email.target.value);}} required minLength="15"  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" type="gmail"/>
    <div className='absolute top-5 insert-y-0 left-2 align-top'><IoMailOutline/></div>
    </div>
    <div className='relative'>
    <input className='bg-newgray mb-6 w-80 h-14 rounded-lg placeholder: pl-8' placeholder='Password' type="text"/>
    <div className='absolute top-5 insert-y-0 left-2 align-top'><HiOutlineLockClosed/></div>
    </div>
    <div className='relative'>
    <input className='bg-newgray mb-6 w-80 h-14 rounded-lg placeholder: pl-8' placeholder='Confirm password' type="text"/>
    <div className='absolute top-5 insert-y-0 left-2 align-top'><HiOutlineLockClosed/></div>
    </div>
    <ButtonCreate saveInputs={saveInputs}/>
    </form>
  )
}
