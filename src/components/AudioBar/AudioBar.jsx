import React from "react";
import AudioPlayerDk from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import "./AudioBar.css";
import { useContext } from "react";
import { MusicContext } from "../../context/MusicContext/MusicContext";

export const AudioBar = ({ url, indexPlay }) => {
  const { handleIndex } = useContext(MusicContext);

  return (
    <div>
      <AudioPlayerDk
        src={url}
        onEnded={() => handleIndex(indexPlay + 1)}
      />
    </div>
  );
};
