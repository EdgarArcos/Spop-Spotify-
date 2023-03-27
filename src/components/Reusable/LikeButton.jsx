import { useState } from "react";
import { RiHeart3Fill } from "react-icons/ri";

export const LikeButton = ({
  songId,
  className,
  activeClass,
  disactiveClass,
}) => {
  const [isLiked, setIsLiked] = useState(false);

  const addSongFavList = (id) => {
    setIsLiked(!isLiked);
    console.log(id);
  };

  return (
    <RiHeart3Fill
      className={`${className} ${isLiked ? activeClass : disactiveClass}`}
      onClick={() => addSongFavList(songId)}
    />
  );
};
