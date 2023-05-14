import { useContext } from "react";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { MusicContext } from "../../context/MusicContext/MusicContext";

export const PlayBtnSongCard = ({ song }) => {
  const { activatePlayOn, handleIndex, changeCurrentList } =
    useContext(MusicContext);

  const handlePlaySongCard = () => {
    changeCurrentList([song]);
    handleIndex(0);
    activatePlayOn();
  };

  return <BsFillPlayCircleFill onClick={handlePlaySongCard} />;
};
