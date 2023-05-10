import "react-h5-audio-player/lib/styles.css";
import "./AudioBar.css";
import { useContext, useRef, useState, useEffect } from "react";
import { MusicContext } from "../../context/MusicContext/MusicContext";
import {
  FaVolumeDown,
  FaStepBackward,
  FaPlay,
  FaStepForward,
  FaPause,
  FaRandom,
} from "react-icons/fa";
import { TbRepeatOnce } from "react-icons/tb";
import { AiOutlineExpandAlt } from "react-icons/ai";
import { Link } from "react-router-dom";

export const AudioBar = ({ url, name, artist }) => {
  const { handlePlayOn, handleIndex, handleRepeat, handleRandom, musicState } =
    useContext(MusicContext);
  const { indexPlay, currentList, random, repeat, playOn } = musicState;

  const [statevolum, setStateVolum] = useState(0.3);
  const [dur, setDur] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  let audioRef = useRef(null);

  const handleVolume = (q) => {
    setStateVolum(q);
    audioRef.current.volume = q;
  };

  const toggleAudio = () => {
    audioRef.current.paused
      ? audioRef.current.play()
      : audioRef.current.pause();
  };

  const fmtMSS = (s) => {
    return (s - (s %= 60)) / 60 + (9 < s ? ":" : ":0") + ~~s;
  };

  const handleProgress = (e) => {
    let compute = (e.target.value * dur) / 100;
    setCurrentTime(compute);
    audioRef.current.currentTime = compute;
  };

  useEffect(() => {
    audioRef.current.volume = statevolum;

    toggleAudio();
  }, [indexPlay]);

  const prevSong = () => {
    if (indexPlay === 0) {
      handleIndex(0);
    } else {
      handleIndex(indexPlay - 1);
    }
  };

  const nextSong = () => {
    if (indexPlay === currentList.length - 1) {
      handleIndex(0);
    } else {
      handleIndex(indexPlay + 1);
    }
  };

  const repeatSong = () => {
    if (repeat) {
      handleIndex(indexPlay);
      toggleAudio();
    } else {
      handleIndex(indexPlay + 1);
    }
  };

  const handlePlayAndPause = () => {
    toggleAudio();
    handlePlayOn();
  };

  return (
    <div className="flex flex-col sm:flex-row">
      <audio
        ref={audioRef}
        onTimeUpdate={(e) => setCurrentTime(e.target.currentTime)}
        onCanPlay={(e) => setDur(e.target.duration)}
        onEnded={repeatSong}
        type="audio/mpeg"
        preload="true"
        src={url}
      />

      <div className="hidden sm:flex content-center overflow-hidden w-6 transition-all delay-500 absolute left-3 hover:w-20">
        <span className="w-2.5">
          <FaVolumeDown />
        </span>
        <input
          value={Math.round(statevolum * 100)}
          type="range"
          name="volBar"
          id="volBar"
          onChange={(e) => handleVolume(e.target.value / 100)}
        />
      </div>

      <div className="flex flex-row ml-24 min-w-32">
        <span
          className="m-2 mt-3 text-md sm:m-4 sm:mt-5 sm:text-xl text-teal cursor-pointer hover:text-cyan-800"
          onClick={prevSong}
        >
          <FaStepBackward />
        </span>

        <span
          className="flex flex-row m-2 p-2 justify-center bg-teal rounded-full text-md w-8 h-8 sm:w-12 sm:h-12 sm:items-center"
          onClick={handlePlayAndPause}
        >
          {audioRef.current?.paused ? (
            <FaPlay className="ml-1 sm:ml-1" />
          ) : (
            <FaPause className="ml-0 sm:ml-1" />
          )}
          {/* <span className={!playOn ? "" : "hidden"}>
            <FaPlay className="ml-1 sm:ml-1" />
          </span>
          <span className={!playOn ? "hidden" : ""}>
            <FaPause className="ml-0 sm:ml-1" />
          </span> */}
        </span>

        <span
          className="m-2 ml-0 mt-3 text-md sm:m-4 sm:mt-5 sm:text-xl cursor-pointer text-teal hover:text-cyan-800"
          onClick={nextSong}
        >
          <FaStepForward />
        </span>
        <div className="text-teal text-xl cursor-pointer hover:text-cyan-800 flex justify-end m-2 ml-10 mt-3 sm:hidden">
          <Link to="/nowplaying">
            <AiOutlineExpandAlt />
          </Link>
        </div>
      </div>

      <div className="flex justify-center items-center ml-5">
        <div>
          <span className="block text-md font-semibold">{name}</span>
          <span className="hidden sm:block text-sm">{artist}</span>
        </div>
        <input
          onChange={handleProgress}
          value={dur ? (currentTime * 100) / dur : 0}
          type="range"
          name="progresBar"
          id="prgbar"
        />
        <span className="w-9 mt-2.5 mb-2.5">{fmtMSS(currentTime)}</span>/
        <span className="w-9 mt-2.5 mb-2.5">{fmtMSS(dur)}</span>
      </div>

      <div className="hidden sm:flex justify-evenly w-[10vw] text-teal ml-6  cursor-pointer hover:text-cyan-800">
        <div className="text-teal text-xl mt-5 cursor-pointer hover:text-cyan-800">
          <span
            onClick={handleRandom}
            className={!random ? "text-teal" : "text-cyan-800"}
          >
            <FaRandom />
          </span>
        </div>
        <div className="text-teal text-2xl mt-5 cursor-pointer hover:text-cyan-800">
          <span
            onClick={handleRepeat}
            className={!repeat ? "text-teal" : "text-cyan-800"}
          >
            <TbRepeatOnce />
          </span>
        </div>

        <div className="text-teal text-2xl mt-5 cursor-pointer hover:text-cyan-800">
          <Link to="/nowplaying">
            <AiOutlineExpandAlt />
          </Link>
        </div>
      </div>
    </div>
  );
};
