import { SongCard } from "../Reusable";

export const ResultsOfSearch = ({ resultsArr }) => {
  return (
    <div className="grid grid-cols-2 place-items-center gap-y-4 p-5 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7">
      {resultsArr.map(({ _id, name, url, img }) => (
        <SongCard key={_id} id={_id} name={name} url={url} img={img} />
      ))}
    </div>
  );
};
