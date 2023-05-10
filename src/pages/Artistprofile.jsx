import React, { useEffect, useState } from 'react'
import { ModalSong } from '../components/ArtProfile/ModalSong';
import Cardsong from "../components/ArtProfile/Cardsongs";
import { useSongs } from "../context/SongContext/SongContext";
import { useAuth0 } from "@auth0/auth0-react";

export const Artistprofile = () => {
    const [showModal, setShowModal] = useState(false)
    // const [filteredSongs, setFilteredSongs] = useState([])
    const { user } = useAuth0()
    const { getSongs, songs, setSongs } = useSongs()

    useEffect(() => {
        const getFilteredSongs = async () => {
            setSongs(await getSongs(user))
        }
        getFilteredSongs()
    }, [user, getSongs])

    return (
        <div className='min-h-screen h-full w-full text-white flex flex-col'>
            <div className=" bg-newblack sm:pl-60">
                <div className="flex justify-center sm:justify-start sm:bg-gradient-to-b from-cyan-700 to-zinc-800 smborder-b border-graytext">
                    <img
                        className="w-full rounded-b-3xl sm:w-52 sm:rounded-2xl sm:m-4 sm:mt-32"
                        src={user?.picture}
                        alt="UserImage"
                    />
                    <h1 className="hidden sm:flex items-center m-4 mt-32 text-white text-4xl font-bold">{user?.nickname}</h1>
                </div>
                <div className="bg-newblack sm:bg-gradient-to-b from-zinc-800 to-newblack pt-2">
                    <div className=' flex flex-row pl-3'><button className="  bg-indigo-600 text-sm px-2 py-1 rounded-md hover:bg-indigo-500 my-5" onClick={() => setShowModal(true)}>New Song +</button></div>
                    <div className="flex flex-col m-5">
                        <table className="w-full">
                            <thead>
                                <tr className="hidden sm:grid sm:grid-cols-2 md:grid md:grid-cols-3 lg:grid lg:grid-cols-4  text-graytext text-lg border-b  border-graytext mb-8 ">
                                    <th>#</th>
                                    <th>Title</th>
                                    <th className="hidden md:grid">Artist</th>
                                </tr>
                            </thead>
                        </table>
                        <div><ModalSong isVisible={showModal} onClose={() => setShowModal(false)} /></div>
                        {songs.length !== 0 && songs.map((song, index) => (
                            <Cardsong song={song} index={index} key={song._id} />
                        )
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
