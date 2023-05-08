import { useState } from "react";
import { addSongPlaylistFetch } from "../../api/playlistRequests";
import axios from "axios";

export const ResultsOfSearchSongs = ({ resultsArr }) => {

    const [isLoading, setIsLoading] = useState(false);

    const handleAdd = async (e) => {
      setIsLoading(true);
  
      const song = {
        name: e.target.value,
        artist: e.target.value
      }; // Replace with the actual song object
  
      try {
        const updatedPlaylist = await addSongToPlaylist(song);
        console.log(updatedPlaylist);
        setIsLoading(false);
      } catch (err) {
        console.error(err);
        setIsLoading(false);
      }
    };
  
    const addSongToPlaylist = async (playlistId, song) => {
      try {
        const response = await axios.post(`http://localhost:4000/playlist/${playlistId}/songs`, song);
        return response.data.playlist;
      } catch (err) {
        console.error(err);
        throw new Error('Failed to add song to playlist');
      }
    };
    return (
        <div>
            {resultsArr.map(({ _id, artist, name, img }) => (
                <div key={_id} className="grid grid-cols-3 gap-2 w-full hover:bg-newgray rounded-md cursor-pointer m-4">
                <img
                    className="grid items-center rounded-2xl w-20 max-w-none"
                    src={img}
                    alt={name}
                />
                
                    <p className="grid items-center text-graytext font-bold">{name}-{artist}</p>

                    <button onClick={handleAdd} className="flex flex-row m-6 p-2 items-center bg-teal w-24 rounded-full justify-center">Add</button>
                </div>
        ))}
        </div>
    );
};


