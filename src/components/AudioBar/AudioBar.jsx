import React from "react";
import AudioPlayerDk from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import "./AudioBar.css";
import { useContext } from "react";
import { MusicContext } from "../../context/MusicContext/MusicContext";


export const AudioBar = ({ url, setIndexPlay }) => {

  const {handlePlayOn}=useContext(MusicContext)

  return (

    <div>
      <AudioPlayerDk
        src={url}
        onEnded={() => setIndexPlay((prev) => prev + 1)}
        onPlay={ handlePlayOn}
        onPause={handlePlayOn}
      />
    </div>
  );
};
