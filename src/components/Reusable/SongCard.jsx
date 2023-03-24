import { LikeButton } from "./LikeButton";

export const SongCard = ({ id, name, url, thumbnail }) => {
  return (
    <div key={id} className="w-32 h-44 group">
      <LikeButton
        songId={id}
        className="absolute z-10 mt-1 ml-24 text-2xl group-hover:cursor-pointer"
        activeClass="text-teal"
        disactiveClass="hidden text-white group-hover:block"
      />
      <img
        src={thumbnail}
        alt="img"
        className="w-32 max-w-none h-32 rounded-xl"
      />
      <p className="mt-1.5 text-xs">{name}</p>
    </div>
  );
};
