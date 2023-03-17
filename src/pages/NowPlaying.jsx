import React from 'react'

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
        <button className="bg-white rounded-full p-4 shadow-md">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
            <path d="M8 5v14l11-7z" />
          </svg>
        </button>
        <button className="bg-white rounded-full p-4 shadow-md mx-8">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
            <path d="M9 6h2v12H9zm-3 0h2v12H6V6zm12 0h-2v12h2V6z" />
          </svg>
        </button>
        <button className="bg-white rounded-full p-4 shadow-md">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
            <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
          </svg>
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
