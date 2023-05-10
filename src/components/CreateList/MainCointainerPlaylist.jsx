import React, { useContext } from 'react'
import { FaHeart, FaPlay, FaRegHeart } from 'react-icons/fa'
import { MusicContext } from '../../context/MusicContext/MusicContext';
import { LikeButton } from '../Reusable/LikeButton';

export const MainCointainerPlaylist = ({playlist}) => {

    const { handlePlayOn, handleIndex, changeCurrentList } = useContext(MusicContext);


    const handlePlay = (index) => {
        changeCurrentList(playlist.songs)
        handleIndex(index);
        handlePlayOn();
    };

    return (
        <div className="flex flex-col m-5">
            <table className="w-full">
                <thead>
                    <tr className="hidden sm:grid sm:grid-cols-2 md:grid md:grid-cols-3 lg:grid lg:grid-cols-4  text-graytext text-lg border-b  border-graytext mb-8 ">
                        <th>#</th>
                        <th>Title</th>
                        <th className="hidden md:grid">Artist</th>
                        <th className="hidden lg:grid">
                            <FaRegHeart />
                    </th>
                    </tr>
                </thead>
                {playlist.songs.map((song, index) => 
                (
                <tbody
                    key={song._id}
                    onClick={() => handlePlay(index)}
                //     draggable
                //     onDragStart={onDragStart}
                //     onDragEnter={onDragEnter}
                //     onDragEnd={onDragEnd}
                >
                    
                    <tr
                        // onDragOver={(e) => e.preventDefault()}
                        className="group/item flex hover:bg-newgray rounded-md cursor-pointer sm:grid sm:grid-cols-2 md:grid md:grid-cols-3 lg:grid lg:grid-cols-4 gap-4 sm:justify-center m-3"
                    >
                        <td className="hidden sm:flex justify-center pt-6">
                            <p className="visible group-hover/item:invisible">{index + 1}</p>
                            <FaPlay className="invisible group-hover/item:visible flex justify-center" />
                        </td>
                        <td className="flex sm:grid sm:grid-cols-2">
                            <div className="flex sm:hidden">
                                <img
                                    className="rounded-2xl w-20 max-w-none"
                                    src={song.img}
                                    alt={song.name}
                                />
                                    <div className="flex-row ml-3 items-center">
                                        <p className="font-bold">{song.name}</p>
                                        <p className="text-graytext font-bold">
                                            {song.artist} · {playlist.name}
                                        </p>
                                    </div>
                            </div>
                                <img
                                    className="hidden sm:grid sm:col-span-1 rounded-2xl w-20 max-w-none"
                                    src={song.img}
                                    alt={song.name}
                                />
                                    <p className="hidden sm:grid sm:col-span-1">{song.name}</p>
                        </td>
                        <td className="hidden md:grid  pt-6 justify-start pl-14 font-bold text-graytext">
                            {song.artist} · {playlist.name}
                        </td>
                        <td className="hidden lg:grid  pt-6 justify-start">
                            <LikeButton />
                        </td>
                    </tr>
                </tbody>
                ))}
            </table>
        </div>
    )
}
