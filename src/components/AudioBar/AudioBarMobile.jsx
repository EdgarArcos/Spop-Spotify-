import React, { useContext, useEffect, useRef, useState } from 'react'
import { MusicContext } from '../../context/MusicContext/MusicContext';

export const AudioBarMobile = () => {
    const {
        activatePlayOn,
        disablePlayOn,
        handlePlayOn,
        handleIndex,
        handleRepeat,
        handleRandom,
        musicState,
      } = useContext(MusicContext);

    const { indexPlay, currentList, random, repeat, playOn } = musicState;

    
  const [statevolum, setStateVolum] = useState(0.3);
  const [dur, setDur] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  let audioRef = useRef(null);

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

 

  const handlePlay = () => {
    activatePlayOn();
    audioRef.current.play();
  };

  const handlePause = () => {
    disablePlayOn();
    audioRef.current.pause();
  };

  return (
    <div className="grid grid-cols-3 gap-2 grid-flow-row-dense">
    <audio
      ref={audioRef}
      onTimeUpdate={(e) => setCurrentTime(e.target.currentTime)}
      onCanPlay={(e) => setDur(e.target.duration)}
      onEnded={repeatSong}
      type="audio/mpeg"
      preload="true"
      src={url}
    />

    <div className="grid col-span-2">
      <div className="flex flex-row">
        <div>
          <span className="block text-md font-semibold">{name}</span>
          <span className="hidden sm:block text-sm">{artist}</span>
        </div>

        <div className="flex flex-col">
          <LikeButton
            songId={id}
            className="mx-6 cursor-pointer"
            activeClass="text-teal"
            disactiveClass="text-white"
          />
          <div className="text-white text-3xl m-3 cursor-pointer hover:text-cyan-800">
            <Link to="/nowplaying">
              <AiOutlineExpandAlt />
            </Link>
          </div>
        </div>
      </div>
    </div>

    <div className="grid col-span-1">
      <div className="flex flex-col text-teal cursor-pointer hover:text-cyan-800">
        <div className="flex flex-row justify-center items-center">

          <span className="justify-center mx-2 text-white bg-teal rounded-full text-md w-10 h-10 content-center flex items-center">
            {audioRef.current?.paused ? (
              <FaPlay className="" onClick={handlePlay} />
            ) : (
              <FaPause className="" onClick={handlePause} />
            )}
            {/* <span className={!playOn ? "" : "hidden"}>
              <FaPlay className="ml-1 sm:ml-1" />
              </span>
              <span className={!playOn ? "hidden" : ""}>
              <FaPause className="ml-0 sm:ml-1" />
              </span> */}
          </span>

        </div>

        <div className="flex flex-row mb-5">
          <span className=" text-white w-9 mt-2.5 mb-2.5">
            {fmtMSS(currentTime)}
          </span>
          <input
            onChange={handleProgress}
            value={dur ? (currentTime * 100) / dur : 0}
            type="range"
            name="progresBar"
            id="prgbar"
          />
          
        </div>
      </div>
    </div>

  </div>
  )
}
