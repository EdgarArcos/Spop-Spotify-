import React from 'react'
import { FaPlay } from 'react-icons/fa';

export const PlayButtonLibrary = () => {
    return (
    <div>
        <button className="flex flex-row m-4 p-2 items-center bg-teal w-20 rounded-full">
            <FaPlay className="w-5 pl-2" />
            <p className="ml-2">Play</p>
        </button>
    </div> 
    )
}
