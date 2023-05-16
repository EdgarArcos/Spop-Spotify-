import { useContext } from 'react';
import { LikeButton } from '../Reusable/LikeButton';
import { MusicContext } from '../../context/MusicContext/MusicContext';
import { FaPlay } from 'react-icons/fa';
import { useScreenWidth } from '../../hooks/useScreenWidth';

export const EachSongAnotherUser = ({ song, index, setIsPlaying }) => {
  const { handleIndex, activatePlayOn } = useContext(MusicContext);
  const screenWidth = useScreenWidth();

  const { _id, img, name, artist } = song;

  const handlePlay = (index) => {
    setIsPlaying(true);
    handleIndex(index);
    activatePlayOn();
  };

  return (
    <>
      {screenWidth < 640 ? (
        <div
          key={_id}
          onClick={() => handlePlay(index)}
          className="flex flex-row"
        >
          <div className="m-2">
            <img
              className="rounded-2xl ml-4 m-2 h-20 w-20"
              src={img}
              alt={name}
            />
          </div>
          <div className="flex flex-col m-6 justify-start">
            <p className="font-bold">{name}</p>
            <p className="text-graytext font-bold">{artist}</p>
          </div>
        </div>
      ) : (
        <tbody key={_id} onClick={() => handlePlay(index)}>
          <tr className="group/item flex hover:bg-newgray rounded-md cursor-pointer sm:grid sm:grid-cols-2 md:grid md:grid-cols-3 lg:grid lg:grid-cols-4 gap-4 sm:justify-center m-3">
            <td className="flex justify-center pt-6">
              <p className="visible group-hover/item:invisible">{index + 1}</p>
              <FaPlay className="invisible group-hover/item:visible flex justify-center" />
            </td>
            <td className="grid grid-cols-2">
              <img
                className="grid col-span-1 rounded-2xl w-20 h-20 max-w-none"
                src={img}
                alt={name}
              />
              <p className="grid col-span-1">{name}</p>
            </td>
            <td className="hidden md:grid  pt-6 justify-start pl-14 font-bold text-graytext">
              Playlist · {artist}
            </td>
            <td className="hidden lg:grid  pt-6 justify-start">
              <LikeButton
                songId={_id}
                className="text-2xl cursor-pointer z-1"
                activeClass="text-teal"
                disactiveClass="text-white"
              />
            </td>
          </tr>
        </tbody>
      )}
    </>
  );
};
