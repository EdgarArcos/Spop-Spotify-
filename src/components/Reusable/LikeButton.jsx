import { useContext, useEffect, useState } from "react";
import { RiHeart3Fill } from "react-icons/ri";
import { UsersContext } from "../../context/UsersContext";
import { handleLikeSong } from "../../api/api-utils";
import { MusicContext } from "../../context/MusicContext/MusicContext";

export const LikeButton = ({
  songId,
  className,
  activeClass,
  disactiveClass,
}) => {
  const { user } = useContext(UsersContext);
  const { handleLikedSongs, musicState } = useContext(MusicContext);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    const checkIsLiked = musicState.playlist[0]?.songs.includes(songId);
    checkIsLiked ? setIsLiked(true) : setIsLiked(false);
  }, [musicState.playlist[0], songId]);

  const addSongFavList = async (id) => {
    const res = await handleLikeSong({ userId: user.id, songId: id });
    if (res.data.ok) {
      handleLikedSongs(res.data.likedSongs);
      setIsLiked(!isLiked);
    }
  };

  return (
    <RiHeart3Fill
      className={`${className} ${isLiked ? activeClass : disactiveClass}`}
      onClick={() => addSongFavList(songId)}
    />
  );
};
