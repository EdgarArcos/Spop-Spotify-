import { FaPlay } from "react-icons/fa";
import { useContext } from "react";
import { MusicContext } from "../../context/MusicContext/MusicContext";

export const EachLikeSong = ({ song, index }) => {
  const { handlePlayOn, handleIndex } = useContext(MusicContext);
  
  const { id, thumbnail, name, artist, url } = song;

  const handlePlay = (index) => {
    handleIndex(index);
    handlePlayOn();
  };

  return (
    <tbody key={id} onClick={() => handlePlay(index)}>
      <tr className="group/item flex hover:bg-newgray rounded-md cursor-pointer sm:grid sm:grid-cols-2 md:grid md:grid-cols-3 lg:grid lg:grid-cols-4 gap-4 sm:justify-center m-3">
        <td className="hidden sm:flex justify-center pt-6">
          <p className="visible group-hover/item:invisible">{index + 1}</p>
          <FaPlay className="invisible group-hover/item:visible flex justify-center" />
        </td>
        <td className="flex sm:grid sm:grid-cols-2">
          <div className="flex sm:hidden">
            <img
              className="rounded-2xl w-20 max-w-none"
              src={thumbnail}
              alt={name}
            />
            <div className="flex-row ml-3 items-center">
              <p className="font-bold">{name}</p>
              <p className="text-graytext font-bold">Playlist · {artist} </p>
            </div>
          </div>
          <img
            className="hidden sm:grid sm:col-span-1 rounded-2xl w-20 max-w-none"
            src={thumbnail}
            alt={name}
          />
          <p className="hidden sm:grid sm:col-span-1">{name}</p>
        </td>
        <td className="hidden md:grid  pt-6 justify-start pl-14 font-bold text-graytext">
          Playlist · {artist}
        </td>
        <td className="hidden lg:grid  pt-6 justify-start">Time</td>
      </tr>
    </tbody>
  );
};
