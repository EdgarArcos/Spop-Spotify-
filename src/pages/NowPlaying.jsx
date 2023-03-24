import React, { useState, useContext } from 'react'
import { AiFillPlayCircle, AiFillStepBackward } from 'react-icons/ai'
import { BiSkipNext } from 'react-icons/bi'
import { MusicContext } from '../context/MusicContext/MusicContext'

export const NowPlaying = () => {

  const { musicState } = useContext(MusicContext);
  const { likelist, indexPlay } = musicState;

  return (
    <div className="bg-black h-screen w-screen flex flex-col items-center justify-center ">
      <div className="rounded-lg w-full h-full overflow-hidden sm:justify-center sm:flex sm:items-center ">
        <img src={likelist[indexPlay].thumbnail} alt="album cover" className="w-full h-full object-cover  sm:h-96  sm:w-96" />  
      </div>
      <div className="text-white text-center mt-8">
        <p className="text-lg font-bold">{likelist[indexPlay].name}</p>
        <p className="text-gray-400">{likelist[indexPlay].artist}</p>
      </div>
      <div className="flex items-center justify-center mt-8">
        <button className="w-2 rounded-full p-4 shadow-md">
          <AiFillStepBackward/>
        </button>
        <button className="w-4 h-4 rounded-full p-4 shadow-md mx-8 bg-gradient-to-r from-blue-400 to-black-500”">
          <AiFillPlayCircle />
        </button>
        <button className="w-2 rounded-full p-4 shadow-md">
          <BiSkipNext/>
        </button>
      </div>
      <div className="flex items-center justify-center mt-8">
        <div className="bg-gray-700 h-2 rounded-full w-96">
          <div className="bg-green-500 h-full rounded-full w-1/2"></div>
        </div>
      </div>
    </div>
  );
}
