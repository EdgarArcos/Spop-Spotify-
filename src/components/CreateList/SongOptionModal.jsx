import React, { useContext, useEffect, useState } from 'react'
import { deleteSongFetch } from '../../api/playlistRequests';
import { MusicContext } from '../../context/MusicContext/MusicContext';
import { UsersContext } from '../../context/UsersContext';

export const SongOptionModal = ({playlist, song, visible, onClose,}) => {

    const { user } = useContext(UsersContext);
    const { handleDeleteSong, handleLikedSongs, musicState } = useContext(MusicContext);
    const [isLiked, setIsLiked] = useState(false);

    useEffect(() => {
        const checkIsLiked = musicState.playlist[0]?.songs.includes(song._id);
        if (checkIsLiked) setIsLiked(true);
    }, [musicState.playlist]);

    const addSongFavList = async (_id) => {
    const res = await handleLikedSongs({ userId: user.id, songId: _id });
      console.log(res)
      if (res.data.ok) {
        handleLikedSongs(res.data.likedSongs);
        setIsLiked(!isLiked);
      }
    };

    

    const handleClose = () => {
        onClose()
    }

    if (visible !== song._id) return null;

    const handleDelete = async (_id) => {
        const response = await deleteSongFetch({
            songId: _id,
            playlistId: playlist._id});
        console.log(response.data)
        if (response.data.ok) {
            handleDeleteSong(response.data.playlist);
        } else {
            console.log(response.message);
        }
    };
    
    return (
    <div onClick={handleClose} className="fixed bg-black bg-opacity-30 flex justify-center items-center">
        <ul className="bg-gradient-to-b from-zinc-700 to-zinc-900 smborder-b border-graytext p-6 ">
            <li onClick={() => addSongFavList(song._id)}className="pb-2">Add to liked Songs</li>
            <li onClick={() => handleDelete(song._id)}>Delete Song</li>
        </ul>
    </div>
    )
}
