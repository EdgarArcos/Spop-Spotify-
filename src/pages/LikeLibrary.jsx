import React from 'react';
import { FaPlay } from 'react-icons/fa';
import cover from "../assets/testimg/portada.jpg"
import song1  from "../assets/testimg/song1.jpg";
import song2  from "../assets/testimg/song2.jpg";
import song3  from "../assets/testimg/song3.jpg";

export const LikeLibrary = () => {
  return (
    <div className="min-h-screen h-full text-white">
      <div>
        <img className="rounded-b-3xl" src={cover} alt="cover" />
      </div>
      <div>
        <FaPlay />
        <button>Play</button>
        <button>...</button>   
      </div>
      <div className="flex flex-col m-5">
        <div className="grid grid-rows-3 grid-flow-col gap-2">
          <img className="rounded-2xl row-span-3" src={song1} alt="song1" />
          <p className="col-span-1 mt-4 font-bold">Dreamhop Chill Lofi Beats</p>
          <p className="col-span-1 text-graytext font-bold">Playlist·Dreamhop music</p>
          
        </div>
        <div className="grid grid-rows-3 grid-flow-col gap-2">
          <img className="rounded-2xl row-span-3" src={song2} alt="song2" />
          <div>
            <p className="col-span-1 mt-4 font-bold">mimir</p>
            <p className="col-span-1 text-graytext font-bold">Playlist·thomaz</p>
          </div>
        </div>
        <div className="grid grid-rows-3 grid-flow-col gap-2">
          <img className="rounded-2xl row-span-3" src={song3} alt="song3" />
          <div>
            <p className="col-span-1 mt-4 font-bold">Study lofi</p>
            <p className="col-span-1 text-graytext font-bold">Playlist·thomaz</p>
          </div>
        </div>
      </div>
    </div>
  )
}
