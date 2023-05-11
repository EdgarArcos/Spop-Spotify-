import { LikeButton } from "./LikeButton";
import { PlayBtnSongCard } from "./PlayBtnSongCard";

export const SongCard = ({ id, name, url, img }) => {
  return (
    <div key={id} className="w-32 h-44 group relative">
      <img src={img} alt="img" className="w-32 max-w-none h-32 rounded-xl" />
      <span className="hidden absolute z-1 top-24 left-24 text-2xl text-teal group-hover:cursor-pointer group-hover:block">
        <PlayBtnSongCard songId={id} />
      </span>
      <p className="mt-1.5 text-xs">{name}</p>
    </div>
  );
};
