import React from 'react'
import ListSongsArtist from '../components/ArtProfile/ListSongsArtist';
import { ModalSong } from '../components/ArtProfile/ModalSong';

export const Artistprofile = () => {
    return (
        <>
            <div><ListSongsArtist /></div>
            <div><ModalSong /></div>
        </>

    )
}
