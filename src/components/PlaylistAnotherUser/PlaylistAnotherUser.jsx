import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { searchPlaylistById } from '../../api/playlistRequests';
import { PlayButtonLibrary } from '../LikeLibrary/PlayButtonLibrary';
import { FaRegHeart } from 'react-icons/fa';
import { useContext, useEffect, useState } from 'react';
import { MusicContext } from '../../context/MusicContext/MusicContext';
import { EachSongAnotherUser } from './EachSongAnotherUser';
import { ButtonFollowPlaylist } from './ButtonFollowPlaylist';
import { useScreenWidth } from '../../hooks/useScreenWidth';

const PlaylistAnotherUser = () => {
  const { changeCurrentList } = useContext(MusicContext);
  const { playlistId } = useParams();
  const screenWidth = useScreenWidth();
  const [isPlaying, setIsPlaying] = useState(false);

  const { isLoading, error, data } = useQuery({
    queryKey: [playlistId],
    queryFn: () => searchPlaylistById(playlistId),
  });

  useEffect(() => {
    !isLoading && isPlaying && changeCurrentList(data.data.playlist.songs);
  }, [data, isPlaying]);

  return (
    <div className="sm:pl-60 w-full flex flex-col pb-24">
      {error && <p>An error has occurred: {error.message}</p>}
      {!isLoading && (
        <>
          <div>
            {screenWidth < 640 ? (
              <div className=" text-white flex flex-col">
                <div className="bg-newblack">
                  <div>
                    <img
                      className="w-full h-80 rounded-b-3xl"
                      src={data.data.playlist.img}
                      alt="cover"
                    />
                  </div>
                  <div className="flex flex-row">
                    <PlayButtonLibrary playlist={data.data.playlist} />
                    <ButtonFollowPlaylist playlistId={data.data.playlist._id} />
                  </div>
                  {data.data.playlist.songs.map((song, index) => (
                    <EachSongAnotherUser
                      key={song._id}
                      song={song}
                      index={index}
                    />
                  ))}
                </div>
              </div>
            ) : (
              <div>
                <header className="flex flex-col justify-center sm:justify-start sm:bg-gradient-to-b from-zinc-500 to-zinc-900  border-graytext">
                  <div className="text-[0.6rem] flex items-center justify-start sm:p-4 sm:pt-28">
                    <img
                      className="w-full rounded-b-3xl sm:w-52 h-52 sm:rounded-2xl"
                      src={data.data.playlist.img}
                      alt="cover"
                    />
                    <h2 className="flex flex-col p-8">
                      <span className="text-7xl font-bold pb-8">
                        {data.data.playlist.title}
                      </span>
                      <span className="text-3xl pb-3">
                        {data.data.playlist.user.name}
                      </span>
                      <ButtonFollowPlaylist
                        playlistId={data.data.playlist._id}
                      />
                    </h2>
                  </div>
                  <PlayButtonLibrary />
                </header>

                <div className="flex flex-col m-5">
                  <table className="w-full">
                    <thead key="headerLiked">
                      <tr className="hidden sm:grid sm:grid-cols-2 md:grid md:grid-cols-3 lg:grid lg:grid-cols-4  text-graytext text-lg border-b  border-graytext mb-8 ">
                        <th>#</th>
                        <th>Title</th>
                        <th className="hidden md:grid">Artist</th>
                        <th className="hidden lg:grid">
                          <FaRegHeart />
                        </th>
                      </tr>
                    </thead>
                    {data.data.playlist.songs.map((song, index) => (
                      <EachSongAnotherUser
                        key={song._id}
                        song={song}
                        index={index}
                        setIsPlaying={setIsPlaying}
                      />
                    ))}
                  </table>
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default PlaylistAnotherUser;
