import React, { useState, useContext } from "react";
import { MusicContext } from "../context/MusicContext/MusicContext";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const NowPlaying = () => {

  const { musicState } = useContext(MusicContext);
  const { currentList, indexPlay } = musicState;

  return (
    <div className="h-screen flex flex-col sm:pl-[45%] ">
      <Link to="/likelibrary">
        <FaArrowLeft className="flex text-xl mt-6 cursor-pointer" />
      </Link>

      <div className="flex flex-col items-center justify-center text-white w-full h-full mb-48 sm:mb-32">
        <p className=" text-lg font-bold">{currentList[indexPlay].name}</p>
        <p className="  text-gray-400">{currentList[indexPlay].artist}</p>
        <div>
          <img
            src={currentList[indexPlay].img}
            alt="album cover"
            className="w-[15rem] h-[15rem] sm:w-[100%] sm:h-[100%]"
          />
        </div>
      </div>
    </div>
  );
};

export default NowPlaying;