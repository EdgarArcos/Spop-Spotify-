import React, { useContext, useState } from "react";
import fulllogo from "../../assets/testimg/fulllogo.png";
import likedsongs from "../../assets/testimg/likedsongs.png";
import { AiFillHome, AiOutlineSearch } from "react-icons/ai";
import { BiLibrary} from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { BsFillPlusSquareFill } from "react-icons/bs";
import { UsersContext } from "../../context/UsersContext";
import { createplaylistFetch } from "../../api/playlistRequests";
import axios from "axios";


export const SideMenu = () => {

  const { user } = useContext(UsersContext);
  const navigate = useNavigate();
  const [playlist, setPlaylist] = useState([]);

  const handleCreate = async () => {
    const newPlaylist = {
      title: "My playlist",
      img: "https://res.cloudinary.com/dycz1nib9/image/upload/v1683280442/Artist_Songs/createplaylist_ml9at0.png",
      songs: [],
      userId: user.id
    };
    
    try {
      const res = await createplaylistFetch(newPlaylist);
      console.log(res)
      if (res.ok) {
        // Set the new playlist state
        console.log(res.playlist)
        setPlaylist([...playlist, res.playlist]);
        
        // Redirect the user to the new playlist page
        navigate(`/playlist/${res.playlist._id}`);
      }
    } catch (err) {
      console.log(err);
    }
  };
  
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
      
        
      {/* Render the list of playlists */}
      

      {/* Create playlist button */}
      <div onClick={handleCreate} className="flex flex-row p-2  hover:bg-newgray rounded-md cursor-pointer">
        <div>
          <BsFillPlusSquareFill className="text-2xl mr-3" />
        </div>
        <p className="ml-2">Create Playlist</p>
      </div>
      
      {playlist.map((p) => (
        <Link key={p._id} to={`/playlist/${p._id}`}>
          <div className="flex flex-row p-2  hover:bg-newgray rounded-md cursor-pointer">
            <div>
              <img className="w-7 rounded mr-2" src={p.img} alt="playlist" />
            </div>
            <p className="ml-2">{p.title}</p>
          </div>
        </Link>
      ))}

      
      <Link to="/likelibrary" >
      <div className="flex flex-row p-2 border-solid border-b border-newgray pb-5  hover:bg-newgray rounded-md cursor-pointer">
        <img className="w-7 rounded mr-2" src={likedsongs} alt="liekdsongs" />
        <p className="ml-2">Liked Songs</p>
      </div>
      </Link>
    </div>
  );
};
