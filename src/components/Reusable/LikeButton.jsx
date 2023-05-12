import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
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
    const checkIsLiked = musicState.playlist[0].songs.filter(
      (song) => song._id === songId
    );
    checkIsLiked.length > 0 ? setIsLiked(true) : setIsLiked(false);
  }, [songId, musicState.playlist[0]]);

  const checkIsLikedAndAdd = (id) => {
    isLiked
      ? toast((t) => (
          <div className="text-center">
            <p>Do you want to remove it from Liked Songs?</p>
            <div className=" my-1 text-center pt-2">
              <button
                onClick={() => {
                  toast.dismiss(t.id);
                  addSongFavList(id);
                }}
                className="bg-teal text-newblack px-2 py-1 ml-5 rounded-md hover:bg-graytext hover:text-teal"
              >
                Delete
              </button>
              <button
                onClick={() => toast.dismiss(t.id)}
                className="bg-slate-200 text-newblack px-2 py-1 ml-5 rounded-md hover:bg-graytext hover:text-teal"
              >
                Cancel
              </button>
            </div>
          </div>
        ))
      : addSongFavList(id);
  };

  const addSongFavList = async (id) => {
    const res = await handleLikeSong({ userId: user.id, songId: id });
    if (res.data.ok) {
      await handleLikedSongs(res.data.likedSongs);
      setIsLiked(!isLiked);
    }
  };

  return (
    <RiHeart3Fill
      className={`${className} ${isLiked ? activeClass : disactiveClass}`}
      onClick={() => checkIsLikedAndAdd(songId)}
    />
  );
};
