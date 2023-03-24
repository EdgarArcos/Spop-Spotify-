import React, { useState, useContext } from 'react'
import { MusicContext } from '../context/MusicContext/MusicContext'

export const NowPlaying = () => {

  const { musicState } = useContext(MusicContext);
  const { likelist, indexPlay } = musicState;

  return (
    <div className="bg-black h-screen left-10 flex flex-col ">
      <div className="text-white text-center mt-10">
        <p className="text-lg font-bold">{likelist[indexPlay].name}</p>
        <p className="text-gray-400">{likelist[indexPlay].artist}</p>
        <img src={likelist[indexPlay].thumbnail} alt="album cover" className=" h-80 ml-9 mt-4 sm:ml-96" />  
      </div>
    </div>
  );
}
