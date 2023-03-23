import React from "react";
import AudioPlayerDk from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import "./AudioBar.css";
import { useContext, useRef, useState, useEffect} from "react";
import { MusicContext } from "../../context/MusicContext/MusicContext";
import { FaVolumeDown, FaStepBackward, FaPlay , FaStepForward, FaPause, FaRandom, FaRedoAlt} from 'react-icons/fa';

export const AudioBar = ({ url, indexPlay, playing, likelist, playOn, random, repeat, name, artist}) => {
  const { handlePlayOn, handleIndex, togglePlaying, prevSong, nextSong, toggleRepeat, toggleRandom, handleEnd } = useContext(MusicContext);
  
  const [statevolum, setStateVolum] = useState(0.3)
  const [dur, setDur] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  
  let audio = useRef('audio_tag');

  const handleVolume = (q) => {
    setStateVolum(q)
    audio.current.volume = q
  }

  const fmtMSS = (s) => {
    return (s - (s %= 60)) / 60 + (9 < s ? ':' : ':0') + ~~s
  }

  const toggleAudio = () =>
    audio.current.paused ? audio.current.play() : audio.current.pause()

    const handleProgress = (e) => {
      let compute = (e.target.value * dur) / 100
      setCurrentTime(compute)
      audio.current.currentTime = compute
    }
  
    useEffect(() => {
      audio.current.volume = statevolum
      if (playOn) {
        toggleAudio()
      }
      
    }, [indexPlay])

  return (
    <div className="controls">
      <div className="flex flex-row h-20 bg-newgray text-white w-screen align-center fixed">
        <audio ref={audio} 
        onTimeUpdate={(e) => setCurrentTime(e.target.currentTime)}
        onCanPlay={(e) => setDur(e.target.duration)}
        onEnded={handleEnd}
        type="audio/mpeg"
        preload="true"
        src={url}/>
          <div className="vlme">
            <span className="volum">
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

          <div className="musicControls">
        <span className="prev" onClick={prevSong}>
          <FaStepBackward />
        </span>

        <span className="play"
          onClick={() => {
            togglePlaying()
            toggleAudio()
          }}
        >
          <span className={!playOn ? '' : 'hide'}>
            <FaPlay />
          </span>
          <span className={!playOn ? 'hide' : ''}>
            <FaPause />
          </span>
        </span>

        <span className="next" onClick={nextSong}>
          <FaStepForward />
        </span>
      </div>

      <div className="progressb">
        <div className="songMeta">
          <span className="songtitle">{name}</span>
          <span className="songartistName">
            {artist}
          </span>
        </div>
        <input
          onChange={handleProgress}
          value={dur ? (currentTime * 100) / dur : 0}
          type="range"
          name="progresBar"
          id="prgbar"
        />
        <span className="currentT">{fmtMSS(currentTime)}</span>/
        <span className="totalT">{fmtMSS(dur)}</span>
      </div>
      <div className="plsoptions">
        <span
          onClick={toggleRandom}
          className={'random ' + (random ? 'active' : '')}
        >
          <FaRandom />
        </span>
        <span
          onClick={toggleRepeat}
          className={'repeat ' + (repeat ? 'active' : '')}
        >
          <FaRedoAlt />
        </span>
      </div>
    

      </div>

      {/* <AudioPlayerDk
        src={url}
        onEnded={() => handleIndex(indexPlay + 1)}
      /> */}
    </div>
  );
};
