import React from 'react'

export const HeaderPlaylist = ({playlist}) => {
  return (
    <div className="flex justify-center sm:justify-start sm:bg-gradient-to-b from-zinc-500 to-zinc-900 smborder-b border-graytext">
          <img
            className="w-full rounded-b-3xl sm:w-52 sm:rounded-2xl sm:m-4 sm:mt-32"
            src={playlist.img}
            alt="cover"
          />
          <h1 className="hidden sm:flex items-center m-4 mt-32 text-white text-7xl font-bold">
          {playlist.title}
          </h1>
        </div>
  )
}
