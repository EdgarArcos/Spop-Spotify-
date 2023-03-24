import React, { useState, useContext } from 'react'
import { MusicContext } from '../context/MusicContext/MusicContext'

export const NowPlaying = () => {

  const { musicState } = useContext(MusicContext);
  const { likelist, indexPlay } = musicState;

  return (
    <div className="h-screen flex flex-col sm:pl-[45%] ">
      <div className="text-white text-center mt-10 sm:pr-[55%]">
        <p className=" sm:pl-[18%] text-lg font-bold">{likelist[indexPlay].name}</p>
        <p className=" sm:pl-[16%] text-gray-400">{likelist[indexPlay].artist}</p>
        <div>
        <img src={likelist[indexPlay].thumbnail} alt="album cover" className=" h-80 ml-9 mt-4 sm:w-[100%] sm:h-[100%]" />  
        </div>
      </div>
    </div>
  );
}
