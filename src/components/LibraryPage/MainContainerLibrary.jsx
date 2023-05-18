import { useContext, useEffect, useState } from 'react';
import { PlaylistCard } from './PlaylistCard';
import { Link, useNavigate } from 'react-router-dom';
import { MusicContext } from '../../context/MusicContext/MusicContext';
import { BsFillPlusSquareFill } from 'react-icons/bs';
import { createplaylistFetch } from '../../api/playlistRequests';
import { UsersContext } from '../../context/UsersContext';

const MainContainerLibrary = () => {
  const { user } = useContext(UsersContext);
  const { musicState , handleAddPlaylist} = useContext(MusicContext);
  const { playlist } = musicState;

  const navigate = useNavigate();
  const handleCreate = async () => {
    const res = await createplaylistFetch(user._id);
    if (res.data.ok) {
      handleAddPlaylist(res.data.playlist);
      navigate(`/playlist/${res.data.playlist._id}`);
    }
  };

  return (
    <div className="pb-4 w-screen pt-10 sm:pl-[16rem]">
      <h2 className="text-3xl m-2 ml-5">Library</h2>
      <div className="grid grid-cols-2 place-items-center gap-y-4 p-5 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7">
        {playlist.length > 0 &&
          playlist.map(({ _id, title, img }) => (
            <Link
              key={_id}
              to={title === 'Liked Songs' ? '/likelibrary' : `/playlist/${_id}`}
            >
              <PlaylistCard srcImg={img} nameList={title} infoList="Playlist" />
            </Link>
          ))}

          <div className="flex flex-col w-32 h-48 m-4 justify-center items-center sm:hidden">
        <BsFillPlusSquareFill onClick={handleCreate} className="w-12 max-w-none mb-14 h-12"/>
        
      </div>
      </div>
      
    </div>
  );
};

export default MainContainerLibrary;
