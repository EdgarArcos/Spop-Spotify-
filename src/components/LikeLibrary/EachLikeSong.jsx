import React from 'react'
import { AudioBar } from '../AudioBar/AudioBar';
import { FaPlay } from 'react-icons/fa';


export const EachLikeSong = ({ song, num, setPlay }) => {

    const {id, thumbnail, name, artist, url } = song;






    return (
            <tbody key={id}>
                <tr className="flex hover:bg-newgray rounded-md cursor-pointer sm:grid sm:grid-cols-2 md:grid md:grid-cols-3 lg:grid lg:grid-cols-4 gap-4 sm:justify-center m-3">
                    <td className="hidden sm:grid justify-center pt-6">
                        <p>{num}</p>
                        <FaPlay onClick={()=>setPlay(url)} />
                    </td>
                    <td className="flex sm:grid sm:grid-cols-2">
                        <div className="flex sm:hidden">
                        <img className="rounded-2xl w-20 max-w-none" src={thumbnail} alt={name} />
                            <div className="flex-row ml-3 items-center">
                                <p className="font-bold">{name}</p>
                                <p className="text-graytext font-bold">Playlist · {artist} </p>
                                </div>
                        </div>
                        <img className="hidden sm:grid sm:col-span-1 rounded-2xl w-20 max-w-none" src={thumbnail} alt={name} />
                        <p className="hidden sm:grid sm:col-span-1">{name}</p>
                    </td>
                    <td className="hidden md:grid  pt-6 justify-start pl-14 font-bold text-graytext" >Playlist · {artist}</td>
                    <td className="hidden lg:grid  pt-6 justify-start">Time</td>
                </tr>
                {/* <AudioBar url={url} /> */}
            </tbody>
    )
}
