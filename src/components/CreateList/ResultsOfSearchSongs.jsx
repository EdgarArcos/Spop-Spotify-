import { useContext, useState } from 'react';
import { addSongPlaylistFetch } from '../../api/playlistRequests';
import { MusicContext } from '../../context/MusicContext/MusicContext';
import { useScreenWidth } from '../../hooks/useScreenWidth';

export const ResultsOfSongs = ({ resultsArr, playlistId }) => {
  const screenWidth = useScreenWidth();
  const { handleAddSong } = useContext(MusicContext);

  const handleAddToPlaylist = async (songId) => {
    const res = await addSongPlaylistFetch({
      songId: songId,
      playlistId,
    });

    if (res.data.ok) {
      handleAddSong(res.data.playlist);
    }
  };

  return (
    <div>
      {resultsArr.map(({ _id, artist, name, img }) => (
        <div key={_id}>
          {screenWidth < 640 ? (
            <div
              key={_id}
              className="grid grid-cols-3  w-full hover:bg-newgray rounded-md cursor-pointer m-3"
            >
              <img
                className="grid items-center ml-6 rounded-2xl h-14 w-14 object-cover"
                src={img}
                alt={name}
              />

              <p className="grid items-center text-sm text-graytext font-bold">
                {name}
              </p>

              <button
                onClick={() => handleAddToPlaylist(_id)}
                className="flex flex-row p-2 m-2 items-center bg-teal w-10 h-10 rounded-full justify-center"
              >
                +
              </button>
            </div>
          ) : (
            <div
              key={_id}
              className="grid grid-cols-3 gap-2 w-full hover:bg-newgray rounded-md cursor-pointer m-4"
            >
              <img
                className="grid items-center rounded-2xl w-20 h-20 object-cover max-w-none"
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
          )}
        </div>
      ))}
    </div>
  );
};
