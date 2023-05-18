import React, { useContext, useState } from 'react';
import { FaHeart, FaPlay, FaRegHeart } from 'react-icons/fa';
import { MusicContext } from '../../context/MusicContext/MusicContext';
import { LikeButton } from '../Reusable/LikeButton';
import { AiOutlineClose } from 'react-icons/ai';
import { deleteSongFetch } from '../../api/playlistRequests';
import { SongOptionModal } from './SongOptionModal';
import { useScreenWidth } from '../../hooks/useScreenWidth';

export const MainCointainerPlaylist = ({ playlist }) => {
  const screenWidth = useScreenWidth();
  const {
    activatePlayOn,
    disablePlayOn,
    handleIndex,
    changeCurrentList,
    musicState,
  } = useContext(MusicContext);
  const { playOn } = musicState;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOnClose = () => setIsModalOpen(false);

  const handlePlay = (index) => {
    changeCurrentList(playlist.songs);
    handleIndex(index);
    return !playOn ? activatePlayOn() : disablePlayOn();
  };

  return (
    <div>
      {screenWidth < 640 ? (
        <div className="grid">
          {playlist.songs.map((song, index) => (
            <div
              key={song._id}
              className="grid grid-cols-3 gap-2 grid-flow-row-dense"
            >
              <div
                className="grid col-span-1 m-2"
                onClick={() => handlePlay(index)}
              >
                <img
                  className="rounded-2xl ml-4 m-2 h-20 w-20"
                  src={song.img}
                  alt={song.name}
                />
              </div>
              <div
                className="grid col-span-1 m-6"
                onClick={() => handlePlay(index)}
              >
                <p className="text-start font-bold">{song.name}</p>
                <p className="text-start text-graytext font-bold">
                  {song.artist}
                </p>
              </div>
              <div className="grid col-span-1 relative content-end">
                <SongOptionModal
                  onClose={handleOnClose}
                  visible={isModalOpen}
                  playlist={playlist}
                  song={song}
                />
                <button
                  onClick={() => setIsModalOpen(song._id)}
                  className="m-7 text-4xl"
                >
                  ...
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col m-5">
          <table className="w-full">
            <thead>
              <tr className="hidden sm:grid sm:content-center sm:grid-cols-2 md:grid md:grid-cols-3 lg:grid lg:grid-cols-4  text-graytext text-lg border-b  border-graytext mb-8 ">
                <th>#</th>
                <th>Title</th>
                <th className="hidden md:grid">Artist</th>
              </tr>
            </thead>
            {playlist.songs.map((song, index) => (
              <tbody key={song._id}>
                <tr className="group/item flex hover:bg-newgray rounded-md cursor-pointer sm:grid sm:grid-cols-2 md:grid md:grid-cols-3 lg:grid lg:grid-cols-4 gap-4 sm:justify-center m-3">
                  <td
                    onClick={() => handlePlay(index)}
                    className="hidden sm:flex justify-center pt-6"
                  >
                    <p className="visible group-hover/item:invisible">
                      {index + 1}
                    </p>
                    <FaPlay className="invisible group-hover/item:visible flex justify-center" />
                  </td>
                  <td
                    onClick={() => handlePlay(index)}
                    className="flex sm:grid sm:content-center sm:grid-cols-2"
                  >
                    <div className="flex sm:hidden">
                      <img
                        className="rounded-2xl w-20 h-20"
                        src={song.img}
                        alt={song.name}
                      />
                      <div className="flex-row justify-center ml-3 items-center">
                        <p className="font-bold">{song.name}</p>
                        <p className="text-graytext font-bold">{song.artist}</p>
                      </div>
                    </div>
                    <img
                      className="hidden sm:grid  sm:col-span-1 rounded-2xl w-20 h-20"
                      src={song.img}
                      alt={song.name}
                    />
                    <p className="hidden sm:grid sm:content-center sm:col-span-1">
                      {song.name}
                    </p>
                  </td>
                  <td
                    onClick={() => handlePlay(index)}
                    className="hidden md:grid  pt-6 justify-start pl-14 font-bold text-graytext"
                  >
                    {song.artist} · {playlist.name}
                  </td>
                  <td className="hidden relative sm:content-center lg:grid pt-6 justify-start">
                    <button
                      onClick={() => setIsModalOpen(song._id)}
                      className="z-60 mb-4 text-4xl"
                    >
                      ...
                    </button>
                    <SongOptionModal
                      onClose={handleOnClose}
                      visible={isModalOpen}
                      playlist={playlist}
                      song={song}
                    />
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      )}
    </div>
  );
};
