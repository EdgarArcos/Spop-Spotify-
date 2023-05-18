import { FaPlay } from 'react-icons/fa';
import { useContext } from 'react';
import { MusicContext } from '../../context/MusicContext/MusicContext';
import { LikeButton } from '../Reusable/LikeButton';

export const EachLikeSong = ({
  song,
  index,
  onDragStart,
  onDragEnter,
  onDragEnd,
  dragabbleList,
}) => {
  const { handleIndex, activatePlayOn, changeCurrentList } =
    useContext(MusicContext);

  const { _id, img, name, artist } = song;

  const handlePlay = (index) => {
    changeCurrentList(dragabbleList);
    handleIndex(index);
    activatePlayOn();
  };

  return (
    <tbody
      key={_id}
      onClick={() => handlePlay(index)}
      draggable
      onDragStart={onDragStart}
      onDragEnter={onDragEnter}
      onDragEnd={onDragEnd}
    >
      <tr
        onDragOver={(e) => e.preventDefault()}
        className="group/item flex hover:bg-newgray rounded-md cursor-pointer sm:grid sm:grid-cols-2 md:grid md:grid-cols-3 lg:grid lg:grid-cols-4 gap-4 sm:justify-center m-3"
      >
        <td className="hidden sm:flex sm:content-center justify-center pt-6">
          <p className="visible group-hover/item:invisible">{index + 1}</p>
          <FaPlay className="invisible group-hover/item:visible flex justify-center" />
        </td>
        <td className="flex sm:grid sm:grid-cols-2">
          <div className="flex sm:hidden">
            <img className="rounded-2xl w-20 h-20" src={img} alt={name} />
            <div className="flex-row ml-3 items-center">
              <p className="font-bold">{name}</p>
              <p className="text-graytext font-bold">{artist} </p>
            </div>
          </div>
          <img
            className="hidden sm:grid sm:col-span-1 rounded-2xl w-20 h-20 max-w-none"
            src={img}
            alt={name}
          />
          <p className="hidden sm:grid sm:content-center sm:col-span-1">{name}</p>
        </td>
        <td className="hidden md:grid  sm:content-center pt-6 justify-center pl-14 font-bold text-graytext">
          {artist}
        </td>
        <td className="hidden lg:grid sm:content-center pt-6 justify-start">
          <LikeButton
            songId={_id}
            className="text-2xl cursor-pointer z-1"
            activeClass="text-teal"
            disactiveClass="text-white"
          />
        </td>
      </tr>
    </tbody>
  );
};
