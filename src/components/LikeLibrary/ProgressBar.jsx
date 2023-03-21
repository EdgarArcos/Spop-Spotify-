import React from 'react'
import { FaRandom, FaPlay } from 'react-icons/fa'
import { BiSkipPrevious, BiSkipNext } from 'react-icons/bi'
import { HiPause } from 'react-icons/hi'
import { BsRepeat } from 'react-icons/bs'

export const ProgressBar = () => {
    return (
        <div className="fixed bottom-3 p-3 w-screen">
            <div className=" p-4 rounded-2xl w-screen h-24 bg-newgray flex align-middle justify-center">
                <FaRandom />
                <BiSkipPrevious />
                <FaPlay />
                <HiPause />
                <BiSkipNext />
                <BsRepeat />
                </div>
        </div>
    )
}
