import React, { useContext, useState } from "react";
import fulllogo from "../../assets/testimg/fulllogo.png";
import likedsongs from "../../assets/testimg/likedsongs.png";
import { AiFillHome, AiOutlineSearch } from "react-icons/ai";
import { BiLibrary} from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BsFillPlusSquareFill } from "react-icons/bs";
import { UsersContext } from "../../context/UsersContext";

export const SideMenu = () => {

  const { user } = useContext(UsersContext);

  const [playlist, setPlaylist] = useState("");

  // const newPlaylist = {
  //   title: "My playlist",
  //   songs: [],
  //   user: user.id
  // }

  const handleCreate = (e) => {

  }
  return (
    <div className="hidden sm:flex flex-col h-full bg-newblack p-4">
      <img className="mb-6" src={fulllogo} alt="logo" />
      <Link
        to="/"
        className="flex flex-row p-2 hover:bg-newgray rounded-md cursor-pointer"
      >
        <AiFillHome className="text-2xl mr-5" />
        <p>Home</p>
      </Link>
    <Link 
    to="/profile" 
    className="flex flex-row p-2 hover:bg-newgray rounded-md cursor-pointer">
    <FaUserCircle className="text-2xl mr-5"/>
    <p>Profile</p>
    </Link>
      <Link
        to="/search"
        className="flex flex-row p-2 hover:bg-newgray rounded-md cursor-pointer"
      >
        <AiOutlineSearch className="text-2xl mr-3" />
        <p className="ml-2">Search</p>
      </Link>
      <Link
        to="/library"
        className="flex flex-row p-2  hover:bg-newgray rounded-md cursor-pointer"
      >
        <BiLibrary className="text-2xl mr-3" />
        <p className="ml-2">Your Library</p>
      </Link>
      <div className="flex flex-row p-2">
        <p className="text-graytext m-3">PLAYLIST</p>
      </div>
      <Link to="/createplaylist">
        <div className="flex flex-row p-2  hover:bg-newgray rounded-md cursor-pointer">
          <div>
            <BsFillPlusSquareFill className="text-2xl mr-3" />
          </div>
          <p className="ml-2">Create Playlist</p>
        </div>
      </Link>
      <Link to="/likelibrary" onClick={handleCreate}>
      <div className="flex flex-row p-2 border-solid border-b border-newgray pb-5  hover:bg-newgray rounded-md cursor-pointer">
        <img className="w-7 rounded mr-2" src={likedsongs} alt="liekdsongs" />
        <p className="ml-2">Liked Songs</p>
      </div>
      </Link>
    </div>
  );
};
