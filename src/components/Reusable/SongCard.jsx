import { useState } from "react";
import { RiHeart3Fill } from "react-icons/ri";

export const SongCard = ({ id, name, url, thumbnail }) => {
  const [isLiked, setIsLiked] = useState(false);

  const addSongFavList = (id) => {
    setIsLiked(!isLiked);
    console.log(id);
    // falta la lógica de guardar en lista cuándo tengamos el backend
  };

  return (
    <div key={id} className="w-32 h-48 group">
      <RiHeart3Fill
        className={`absolute z-10 mt-1 ml-24 text-2xl group-hover:cursor-pointer ${
          isLiked ? " text-teal " : "hidden text-white group-hover:block"
        }`}
        onClick={() => addSongFavList(id)}
      />
      <img
        src={thumbnail}
        alt="img"
        className="w-32 max-w-none h-32 rounded-xl"
      />
      <p className="mt-1.5 text-sm">{name}</p>
    </div>
  );
};
