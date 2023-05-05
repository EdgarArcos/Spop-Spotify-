import React, { useContext, useState } from "react";
import fulllogo from "../../assets/testimg/fulllogo.png";
import likedsongs from "../../assets/testimg/likedsongs.png";
import { AiFillHome, AiOutlineSearch } from "react-icons/ai";
import { BiLibrary } from "react-icons/bi";
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

  const handleCreate = (e) => {};
  return (
    <div className="flex flex-col h-screen bg-newblack p-4 w-60 fixed">
      <img className="pb-3" src={fulllogo} alt="logo" />
      <Link
        to="/"
        className="flex flex-row pl-2 p-1 hover:bg-newgray rounded-md cursor-pointer"
      >
        <AiFillHome className="text-xl" />
        <p className="text-md pl-2">Home</p>
      </Link>
      <Link
        to="/profile"
        className="flex flex-row pl-2 p-1 hover:bg-newgray rounded-md cursor-pointer"
      >
        <FaUserCircle className="text-xl" />
        <p className="text-md pl-2">Profile</p>
      </Link>
      <Link
        to="/search"
        className="flex flex-row pl-2 p-1 hover:bg-newgray rounded-md cursor-pointer"
      >
        <AiOutlineSearch className="text-xl" />
        <p className="text-md pl-2">Search</p>
      </Link>
      <Link
        to="/library"
        className="flex flex-row pl-2 p-1 hover:bg-newgray rounded-md cursor-pointer"
      >
        <BiLibrary className="text-xl" />
        <p className="pl-2 text-md">Your Library</p>
      </Link>
      <div className="flex flex-row p-2">
        <p className="text-graytext py-2">PLAYLIST</p>
      </div>
      <Link to="/createplaylist">
        <div className="flex flex-row p-2 hover:bg-newgray rounded-md cursor-pointer">
          <div>
            <BsFillPlusSquareFill className="text-2xl" />
          </div>
          <p className="pl-2 text-md">Create Playlist</p>
        </div>
      </Link>
      <Link to="/likelibrary" onClick={handleCreate}>
        <div className="flex flex-row p-2 border-solid border-b border-newgray pb15  hover:bg-newgray rounded-md cursor-pointer">
          <img className="w-6 h-6 rounded" src={likedsongs} alt="liekdsongs" />
          <p className="pl-2 text-md">Liked Songs</p>
        </div>
      </Link>
    </div>
  );
};
