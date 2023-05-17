import { useContext } from 'react';
import { BsFillPlayCircleFill } from 'react-icons/bs';
import { MusicContext } from '../../context/MusicContext/MusicContext';

export const PlayBtnSongCard = ({ song }) => {
  const { activatePlayOn, handleIndex, changeCurrentList } =
    useContext(MusicContext);

  const handlePlaySongCard = async () => {
    await changeCurrentList([song]);
    await handleIndex(0);
    await activatePlayOn();
  };

  return <BsFillPlayCircleFill onClick={handlePlaySongCard} />;
};
