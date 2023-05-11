import { useContext } from "react";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { MusicContext } from "../../context/MusicContext/MusicContext";
import { getSongById } from "../../api/api-utils";

export const PlayBtnSongCard = ({ songId }) => {
  const { activatePlayOn, handleIndex, changeCurrentList } =
    useContext(MusicContext);

  const handlePlaySongCard = async () => {
    const res = await getSongById(songId);
    if (res.data.ok) {
      await changeCurrentList([res.data.song]);
      handleIndex(0);
      activatePlayOn();
    }
  };

  return <BsFillPlayCircleFill onClick={handlePlaySongCard} />;
};
