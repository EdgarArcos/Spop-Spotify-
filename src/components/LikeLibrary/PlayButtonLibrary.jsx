import { useContext } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import { MusicContext } from "../../context/MusicContext/MusicContext";

export const PlayButtonLibrary = () => {
  const {
    // handlePlayOn,
    handleIndex,
    musicState,
    activatePlayOn,
    disablePlayOn,
  } = useContext(MusicContext);
  const { playOn } = musicState;

  const handleIndexPlay = () => {
    handleIndex(0);
    return !playOn ? activatePlayOn() : disablePlayOn();
    // handlePlayOn();
  };

  return (
    <div>
      <button
        onClick={handleIndexPlay}
        className="flex flex-row m-4 p-2 items-center bg-teal w-24 rounded-full sm:w-14 h-14 justify-center"
      >
        <span className={!playOn ? "" : "hidden"}>
          <FaPlay className="w-5 sm:w-20" />
        </span>
        <span className={!playOn ? "" : "hidden"}>
          <p className="ml-2 sm:hidden">Play</p>
        </span>
        <span className={!playOn ? "hidden" : ""}>
          <FaPause className="w-5 sm:w-20" />
        </span>
        <span className={!playOn ? "hidden" : ""}>
          <p className="ml-2 sm:hidden">Pause</p>
        </span>
      </button>
    </div>
  );
};
