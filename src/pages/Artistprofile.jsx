import React, { useEffect, useState } from 'react'
import { ModalSong } from '../components/ArtProfile/ModalSong';
import Cardsong from "../components/ArtProfile/Cardsongs";
import { useSongs } from "../context/SongContext/SongContext";
import { useAuth0 } from "@auth0/auth0-react";

export const Artistprofile = () => {
    const [showModal, setShowModal] = useState(false)
    const [filteredSongs, setFilteredSongs] = useState([])
    const { user } = useAuth0()
    const { getSongs } = useSongs()

    useEffect(() => {
        const getFilteredSongs = async () => {
            setFilteredSongs(await getSongs(user))
        }
        getFilteredSongs()
    }, [user, getSongs])

    return (
        <>
            <div><button className=" bg-indigo-600 text-sm px-2 py-1 rounded-sm hover:bg-indigo-500 my-5" onClick={() => setShowModal(true)}>New Song +</button></div>
            <div><ModalSong isVisible={showModal} onClose={() => setShowModal(false)} /></div>
            {filteredSongs.length !== 0 && filteredSongs.map(song => (
                <Cardsong song={song} key={song._id} />
            )
            )}
        </>

    )
}
