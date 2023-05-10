import { useEffect, useState } from "react";
import { makeRequest } from "../../api/api-utils";
import { PlaylistCard } from "./PlaylistCard";
import likedsongsbig from "../../assets/testimg/likedsongsbig.png";
import { Link } from "react-router-dom";

export const MainContainerLibrary = () => {
  const [playlists, setPlaylists] = useState([]);
  const [likedSongs, setLikedSongs] = useState([]);


  useEffect(() => {
    makeRequest("playlists").then((data) => setPlaylists(data));
    makeRequest("tracks").then((data) => setLikedSongs(data));
  }, []);

  return (
    <div className="pb-4 w-screen pt-10 sm:pl-[16rem]">
      <h2 className="text-3xl m-2 ml-5">Library</h2>
      <div className="grid grid-cols-2 place-items-center gap-y-4 p-5 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7">
      <Link to="/likelibrary">
        <PlaylistCard
          srcImg={likedsongsbig}
          nameList="Liked Songs"
          infoList={`Playlist - ${likedSongs.length} songs`}
        />
        </Link>
        {playlists.length > 0 &&
          playlists.map(({ id, name, thumbnail }) => (
            <PlaylistCard
              key={id}
              srcImg={thumbnail}
              nameList={name}
              infoList="Playlist"
            />
          ))}
      </div>
    </div>
  );
};
