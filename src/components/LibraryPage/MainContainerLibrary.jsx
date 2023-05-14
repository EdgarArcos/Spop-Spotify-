import { useContext, useEffect, useState } from "react";
import { PlaylistCard } from "./PlaylistCard";
import { Link } from "react-router-dom";
import { MusicContext } from "../../context/MusicContext/MusicContext";

const MainContainerLibrary = () => {
  const { musicState } = useContext(MusicContext);
  const { playlist } = musicState;

  return (
    <div className="pb-4 w-screen pt-10 sm:pl-[16rem]">
      <h2 className="text-3xl m-2 ml-5">Library</h2>
      <div className="grid grid-cols-2 place-items-center gap-y-4 p-5 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7">
        {playlist.length > 0 &&
          playlist.map(({ _id, title, img }) => (
            <Link
              to={title === "Liked Songs" ? "/likelibrary" : `/playlist/${_id}`}
            >
              <PlaylistCard
                key={_id}
                srcImg={img}
                nameList={title}
                infoList="Playlist"
              />
            </Link>
          ))}
      </div>
    </div>
  );
};

export default MainContainerLibrary;
