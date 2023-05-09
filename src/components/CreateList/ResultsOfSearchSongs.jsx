import { useContext, useState } from "react";
import { addSongPlaylistFetch } from "../../api/playlistRequests";
import { MusicContext } from "../../context/MusicContext/MusicContext";

export const ResultsOfSearchSongs = ({ resultsArr, playlistId }) => {

  const {handleAddSong} = useContext(MusicContext)


  const handleAddToPlaylist = async (songId) => {

      const res = await addSongPlaylistFetch({
        songId: songId,
        playlistId
      });

      if(res.data.ok) {
        handleAddSong(res.data.playlist)
      }


  };

  return (
    <div>
      {resultsArr.map(({ _id, artist, name, img }) => (
        <div
          key={_id}
          className="grid grid-cols-3 gap-2 w-full hover:bg-newgray rounded-md cursor-pointer m-4"
        >
          <img
            className="grid items-center rounded-2xl w-20 max-w-none"
            src={img}
            alt={name}
          />

          <p className="grid items-center text-graytext font-bold">
            {name}-{artist}
          </p>

          <button
            onClick={() => handleAddToPlaylist(_id)}
            className="flex flex-row m-6 p-2 items-center bg-teal w-24 rounded-full justify-center"
          >
            Add
          </button>
        </div>
      ))}
    </div>
  );
};


