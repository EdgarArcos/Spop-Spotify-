import { LikeButton } from './LikeButton';
import { PlayBtnSongCard } from './PlayBtnSongCard';

export const SongCard = ({ song }) => {
  const { _id, img, name, artist } = song;
  return (
    <div key={_id} className="w-28 h-[11rem] group relative">
      <img src={img} alt="img" className="w-28 max-w-none h-28 rounded-xl" />
      <span className="hidden absolute z-1 top-24 left-24 text-2xl text-teal group-hover:cursor-pointer group-hover:block">
        <PlayBtnSongCard song={song} />
      </span>
      <p className="mt-1.5 text-[0.7rem]">{name}</p>
      <p className="mt-1.5 text-[0.6rem]">{artist}</p>
    </div>
  );
};
