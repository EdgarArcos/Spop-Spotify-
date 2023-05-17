import { useContext } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';
import { MusicContext } from '../../context/MusicContext/MusicContext';

export const PlayButtonLibrary = ({ playlist }) => {
  const {
    activatePlayOn,
    handleIndex,
    changeCurrentList,
    musicState,
    disablePlayOn,
  } = useContext(MusicContext);

  const { playOn } = musicState;

  const handleIndexPlay = () => {
    handleIndex(0);
    changeCurrentList(playlist.songs);
    activatePlayOn();
  };

  const handleIndexPause = () => {
    handleIndex(0);
    changeCurrentList(playlist.songs);
    disablePlayOn();
  };

  return (
    <div>
      <button className="flex flex-row m-4 p-2 items-center bg-teal w-24 rounded-full sm:w-14 h-14 justify-center">
        {!playOn && (
          <>
            <FaPlay onClick={handleIndexPlay} className="w-5 sm:w-20" />
            <p onClick={handleIndexPlay} className="ml-2 sm:hidden">
              Play
            </p>
          </>
        )}
        {playOn && (
          <>
            <FaPause onClick={handleIndexPause} className="w-5 sm:w-20" />
            <p onClick={handleIndexPause} className="ml-2 sm:hidden">
              Pause
            </p>
          </>
        )}
      </button>
    </div>
  );
};
