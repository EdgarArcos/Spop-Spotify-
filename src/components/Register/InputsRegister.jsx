import { BiUser } from "react-icons/bi";
import { IoMailOutline } from "react-icons/io5";
import { HiOutlineLockClosed } from "react-icons/hi";   
import { ButtonCreate } from './ButtonCreate';
export const Inputs = () => {
  const saveInputs = () =>{
    console.log("Hola");
    }
  return (
    <div>
    <div className='relative'>
    <input className=' Nameimput bg-newgray  my-6 w-80 h-14 rounded-lg border-none placeholder: pl-8' placeholder='Name' type="text"/>
    <div className='absolute top-11 insert-y-0 left-2 align-top'><BiUser/></div>
    </div>
    <div className='relative'>
    <input className='bg-newgray mb-6 w-80 h-14 rounded-lg placeholder: pl-8' placeholder='Email' type="text"/>
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
    </div>
  )
}
