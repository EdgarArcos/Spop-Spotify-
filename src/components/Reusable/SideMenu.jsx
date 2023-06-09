import React, { useContext, useEffect, useState } from 'react';
import fulllogo from '../../assets/testimg/fulllogo.png';
import likedsongs from '../../assets/testimg/likedsongs.png';
import { AiFillHome, AiOutlineSearch } from 'react-icons/ai';
import { BiLibrary } from 'react-icons/bi';
import { FaUserCircle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { BsFillPlusSquareFill } from 'react-icons/bs';
import { UsersContext } from '../../context/UsersContext';
import { createplaylistFetch } from '../../api/playlistRequests';
import { MusicContext } from '../../context/MusicContext/MusicContext';
import { MdOutlineLibraryMusic } from 'react-icons/md';

export const SideMenu = () => {
  const { user } = useContext(UsersContext);
  const { musicState, handleAddPlaylist } = useContext(MusicContext);
  const { playlist } = musicState;

  const navigate = useNavigate();
  const handleCreate = async () => {
    const res = await createplaylistFetch(user._id);
    if (res.data.ok) {
      handleAddPlaylist(res.data.playlist);
      navigate(`/playlist/${res.data.playlist._id}`);
    }
  };
  if (user?.role === "Artist") return (
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
      <Link
        to="/artist"
        className="flex flex-row pl-2 p-1 hover:bg-newgray rounded-md cursor-pointer"
      >
        <MdOutlineLibraryMusic className="text-xl" />
        <p className="pl-2 text-md">Add song</p>
      </Link>
      <div className="flex flex-row p-2">
        <p className="text-graytext py-2">PLAYLIST</p>
      </div>

      <div
        onClick={handleCreate}
        className="flex flex-row p-2  hover:bg-newgray rounded-md cursor-pointer"
      >
        <div>
          <BsFillPlusSquareFill className="text-2xl mr-3" />
        </div>
        <p className="ml-2">Create Playlist</p>
      </div>

      {playlist.length > 0 &&
        playlist.map((p) => (
          <Link
            key={p._id}
            to={
              p.title === 'Liked Songs' ? '/likelibrary' : `/playlist/${p._id}`
            }
          >
            <div className="flex flex-row p-2  hover:bg-newgray rounded-md cursor-pointer">
              <div>
                <img
                  className="w-7 h-7 rounded mr-2"
                  src={p.img}
                  alt="playlist"
                />
              </div>
              <p className="ml-2">{p.title}</p>
            </div>
          </Link>
        ))}
    </div>
  );
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

      <div
        onClick={handleCreate}
        className="flex flex-row p-2  hover:bg-newgray rounded-md cursor-pointer"
      >
        <div>
          <BsFillPlusSquareFill className="text-2xl mr-3" />
        </div>
        <p className="ml-2">Create Playlist</p>
      </div>

      {playlist.length > 0 &&
        playlist.map((p) => (
          <Link
            key={p._id}
            to={
              p.title === 'Liked Songs' ? '/likelibrary' : `/playlist/${p._id}`
            }
          >
            <div className="flex flex-row p-2  hover:bg-newgray rounded-md cursor-pointer">
              <div>
                <img
                  className="w-7 h-7 rounded mr-2"
                  src={p.img}
                  alt="playlist"
                />
              </div>
              <p className="ml-2">{p.title}</p>
            </div>
          </Link>
        ))}
    </div>
  );
};
