import React from 'react'
import { FaPlay } from 'react-icons/fa';

export const PlayButtonLibrary = ({setPlayOn, playOn, setIndexPlay}) => {

    const handleIndex = () => {
        setIndexPlay(0);
        setPlayOn(!playOn);

    }

    return (
    <div>
        <button className="flex flex-row m-4 p-2 items-center bg-teal w-20 rounded-full sm:w-14 h-14">
            <FaPlay onClick={handleIndex}  className="w-5 pl-2 sm:w-20" />
            <p className="ml-2 sm:hidden">Play</p>
        </button>
    </div> 
    )
}
