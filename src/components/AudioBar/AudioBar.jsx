import './AudioBar.css';
import { useContext, useRef, useState, useEffect } from 'react';
import { MusicContext } from '../../context/MusicContext/MusicContext';
import {
  FaVolumeDown,
  FaStepBackward,
  FaPlay,
  FaStepForward,
  FaPause,
  FaRandom,
} from 'react-icons/fa';
import { TbRepeatOnce } from 'react-icons/tb';
import { AiOutlineExpandAlt } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { LikeButton } from '../Reusable/LikeButton';
import { useScreenWidth } from '../../hooks/useScreenWidth';

export const AudioBar = ({ url, name, artist, id }) => {
  const {
    activatePlayOn,
    disablePlayOn,
    handleIndex,
    handleRepeat,
    handleRandom,
    musicState,
  } = useContext(MusicContext);
  const { indexPlay, currentList, random, repeat } = musicState;
  const screenWidth = useScreenWidth();

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
      ? setTimeout(function () {
          audioRef.current.play();
        }, 150)
      : audioRef.current.pause();
  };

  const fmtMSS = (s) => {
    return (s - (s %= 60)) / 60 + (9 < s ? ':' : ':0') + ~~s;
  };

  const handleProgress = (e) => {
    let compute = (e.target.value * dur) / 100;
    setCurrentTime(compute);
    audioRef.current.currentTime = compute;
  };
  useEffect(() => {
    audioRef.current.volume = statevolum;
    toggleAudio();
  }, [indexPlay, currentList]);

  const prevSong = () => {
    if (indexPlay === 0) {
      handleIndex(0);
    } else {
      handleIndex(indexPlay - 1);
    }
  };

  const nextSong = () => {
    if (indexPlay === currentList.length - 1) {
      currentList.length > 0 && handleIndex(0);
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

  const handlePlay = async () => {
    activatePlayOn();
    toggleAudio();
  };

  const handlePause = async () => {
    disablePlayOn();
    toggleAudio();
  };

  return (
    <div>
      {screenWidth < 640 ? (
        <div className="flex flex-col h-2">
          <audio
            ref={audioRef}
            onTimeUpdate={(e) => setCurrentTime(e.target.currentTime)}
            onCanPlay={(e) => setDur(e.target.duration)}
            onEnded={repeatSong}
            type="audio/mpeg"
            preload="true"
            src={url}
          />

          <div className="flex items-center justify-between pb-1">
            <div className="flex flex-col items-start justify-start">
              <span className="text-[0.7rem]">{name}</span>
              <span className="text-[0.6rem]">{artist}</span>
            </div>

            <div className="flex flex-row items-center">
              <Link to="/nowplaying" className="pr-1">
                <AiOutlineExpandAlt className="text-2xl" />
              </Link>
              <LikeButton
                songId={id}
                className="mr-3 text-xl cursor-pointer"
                activeClass="text-teal"
                disactiveClass="text-white"
              />
              <span
                className="text-md text-teal cursor-pointer hover:text-cyan-800"
                onClick={prevSong}
              >
                <FaStepBackward />
              </span>

              <span className="justify-center mx-1 text-teal text-xl rounded-full w-7 h-7 content-center flex items-center cursor-pointer">
                {audioRef.current?.paused ? (
                  <FaPlay onClick={handlePlay} />
                ) : (
                  <FaPause onClick={handlePause} />
                )}
              </span>
              <span
                className="text-md cursor-pointer text-teal hover:text-cyan-800"
                onClick={nextSong}
              >
                <FaStepForward />
              </span>
            </div>
          </div>
          <input
            onChange={handleProgress}
            value={dur ? (currentTime * 100) / dur : 0}
            type="range"
            name="progresBar"
            id="prgbar"
          />
        </div>
      ) : (
        <div className="grid grid-cols-4 gap-2 grid-flow-row-dense">
          <audio
            ref={audioRef}
            onTimeUpdate={(e) => setCurrentTime(e.target.currentTime)}
            onCanPlay={(e) => setDur(e.target.duration)}
            onEnded={repeatSong}
            type="audio/mpeg"
            preload="true"
            src={url}
          />

          <div className="grid col-span-1">
            <div className="flex flex-row">
              <div className="flex flex-col">
                <span className="text-xs md:text-sm">{name}</span>
                <span className="text-[0.6rem] md:text-[0.7rem]">{artist}</span>
              </div>

              <div className="flex flex-col items-center px-2 md:flex-row md:items-start">
                <LikeButton
                  songId={id}
                  className="cursor-pointer md:text-xl"
                  activeClass="text-teal"
                  disactiveClass="text-white"
                />
                <div className="text-white text-2xl cursor-pointer hover:text-cyan-800">
                  <Link to="/nowplaying">
                    <AiOutlineExpandAlt />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="grid col-span-2">
            <div className="flex flex-col text-teal cursor-pointer hover:text-cyan-800">
              <div className="flex flex-row justify-center items-center">
                <div className="text-teal text-base mx-2 cursor-pointer">
                  <FaRandom
                    onClick={handleRandom}
                    className={!random ? 'text-teal' : 'text-cyan-800'}
                  />
                </div>

                <span
                  className="text-md mx-2 sm:text-base text-teal cursor-pointer hover:text-cyan-800"
                  onClick={prevSong}
                >
                  <FaStepBackward />
                </span>

                <span className="justify-center text-newgray bg-teal rounded-full text-md w-9 h-9 content-center flex items-center">
                  {audioRef.current?.paused ? (
                    <FaPlay className="" onClick={handlePlay} />
                  ) : (
                    <FaPause className="" onClick={handlePause} />
                  )}
                </span>

                <span
                  className="text-md mx-2 sm:text-base cursor-pointer text-teal hover:text-cyan-800"
                  onClick={nextSong}
                >
                  <FaStepForward />
                </span>

                <div className="text-teal px-2 text-xl cursor-pointer">
                  <TbRepeatOnce
                    onClick={handleRepeat}
                    className={!repeat ? 'text-teal' : 'text-cyan-800'}
                  />
                </div>
              </div>

              <div className="flex flex-row items-center pt-1">
                <span className=" text-white text-[0.8rem] w-9 mt-1 mb-1">
                  {fmtMSS(currentTime)}
                </span>
                <input
                  onChange={handleProgress}
                  value={dur ? (currentTime * 100) / dur : 0}
                  type="range"
                  name="progresBar"
                  id="prgbar"
                />
                <span className=" text-white text-[0.8rem] w-9 mt-1 mb-1">
                  {fmtMSS(dur)}
                </span>
              </div>
            </div>
          </div>

          <div className="hidden sm:grid col-span-1 content-start transition-all delay-500">
            <div className="flex items-center justify-end pt-2">
              <FaVolumeDown />
              <input
                type="range"
                name="volBar"
                id="volBar"
                className="w-[7.5rem]"
                onChange={(e) => handleVolume(e.target.value / 100)}
                value={Math.round(statevolum * 100)}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
