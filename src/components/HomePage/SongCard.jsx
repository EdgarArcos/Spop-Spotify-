export const SongCard = ({ id, name, url, thumbnail }) => {
  return (
    <div key={id} className="m-2 w-32">
      <img
        src={thumbnail}
        alt="img"
        className="w-32 max-w-none h-32 rounded-xl"
      />
      <p className="mt-1.5 text-sm">{name}</p>
    </div>
  );
};
