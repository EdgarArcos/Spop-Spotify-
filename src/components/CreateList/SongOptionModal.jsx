import React, { useContext, useEffect, useState } from "react";
import { deleteSongFetch } from "../../api/playlistRequests";
import { MusicContext } from "../../context/MusicContext/MusicContext";
import { UsersContext } from "../../context/UsersContext";
import { LikeButton } from "../Reusable/LikeButton";
import { FiTrash2 } from "react-icons/fi";

export const SongOptionModal = ({ playlist, song, visible, onClose }) => {
  const { user } = useContext(UsersContext);
  const { handleDeleteSong, handleLikedSongs, musicState } =
    useContext(MusicContext);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    const checkIsLiked = musicState.playlist[0]?.songs.includes(song._id);
    if (checkIsLiked) setIsLiked(true);
  }, [musicState.playlist]);



  const handleClose = () => {
    onClose();
  };

  if (visible !== song._id) return null;

  const handleDelete = async (_id) => {
    const response = await deleteSongFetch({
      songId: _id,
      playlistId: playlist._id,
    });
    if (response.data.ok) {
      handleDeleteSong(response.data.playlist);
    } else {
      console.log(response.message);
    }
  };

  return (
    <div
      onClick={handleClose}
      className="absolute inset-0 top-0 sm:absolute sm:top-0 z-10 bg-transparent flex justify-center items-center"
    >
      <ul className="bg-gradient-to-b from-zinc-700 to-zinc-900 smborder-b border-newblack border-2  p-2 ">
        <li
          className="p-2  hover:bg-newgray rounded-md cursor-pointer"
        >
          <LikeButton
                songId={song._id}
                className="mx-6 cursor-pointer"
                activeClass="text-teal"
                disactiveClass="text-white"
              />
        </li>
        <li
          onClick={() => handleDelete(song._id)}
          className="p-2 hover:bg-newgray rounded-md cursor-pointer flex justify-center"
        >
          <FiTrash2 />
        </li>
      </ul>
    </div>
  );
};
