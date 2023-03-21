import React from 'react'
import { AiFillPlayCircle, AiFillStepBackward } from 'react-icons/ai'
import { BiSkipNext } from 'react-icons/bi'
export const NowPlaying = () => {
  return (
    <div className="bg-black h-screen w-screen flex flex-col items-center justify-center">
      <div className="rounded-lg w-96 h-96 overflow-hidden">
        <img src="https://picsum.photos/500/500" alt="album cover" className="w-full h-full object-cover" />  
      </div>
      <div className="text-white text-center mt-8">
        <p className="text-lg font-bold">Song Title</p>
        <p className="text-gray-400">Artist Name</p>
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
        <button>
        
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
