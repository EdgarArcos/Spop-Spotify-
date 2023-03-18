import React from 'react'
import fulllogo from '../../assets/testimg/fulllogo.png'
import likedsongs from '../../assets/testimg/likedsongs.png'
import { AiFillHome, AiOutlineSearch } from 'react-icons/ai'
import { BiLibrary } from 'react-icons/bi'
import { BsFillPlusSquareFill } from 'react-icons/bs'

export const SideMenu = () => {
    return (
    <div className="hidden sm:flex flex-col h-full bg-newblack p-4">
        <img src={fulllogo} alt="logo" />
        <div>
            <AiFillHome />
            <p>Home</p>
        </div>
        <div>
            <AiOutlineSearch />
            <p>Search</p>
        </div>
        <div>
            <BiLibrary />
            <p>Your Library</p>
        </div>
        <div>
            <p className="text-graytext mt-2">PLAYLIST</p>
        </div>
        <div>
            <BsFillPlusSquareFill />
            <p>Create Playlist</p>
        </div>
        <div>
        <img className="w-10" src={likedsongs} alt="liekdsongs" />
        <p>Liked Songs</p>
        </div>
    </div>
    )
}
