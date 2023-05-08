import React, { useState } from 'react'
import ListSongsArtist from '../components/ArtProfile/ListSongsArtist';
import { ModalSong } from '../components/ArtProfile/ModalSong';

export const Artistprofile = () => {
    const [showModal, setShowModal] = useState(false)
    return (
        <>
            <div><button className=" bg-indigo-600 text-sm px-2 py-1 rounded-sm hover:bg-indigo-500 my-5" onClick={() => setShowModal(true)}>New Song +</button></div>
            <div><ListSongsArtist /></div>
            <div><ModalSong isVisible={showModal} onClose={() => setShowModal(false)} /></div>
        </>

    )
}
