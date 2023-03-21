import { useEffect, useState } from "react";
import { makeRequest } from "../../api/api-utils";
import { SongCard } from "./SongCard";
import { AiFillFire } from "react-icons/ai";

export const ContainerEachGenre = ({ genre }) => {
  const [songsByGenre, setSongsByGenre] = useState([]);
  useEffect(() => {
    makeRequest(`tracks?genre=${genre}`).then((data) => setSongsByGenre(data));
  }, []);

  return (
    <>
      {songsByGenre.length > 0 && (
        <section className="w-full">
          <h2 className="px-4 text-teal flex align-middle justify-start">
            <AiFillFire className="self-center mr-1" />
            {genre.toUpperCase()}
          </h2>
          <div className="px-4 pt-2 flex flex-row gap-4 flex-nowrap align-middle justify-start overflow-x-auto">
            {songsByGenre.map(({ id, name, url, thumbnail }) => (
              <SongCard
                id={id}
                name={name}
                urlSong={url}
                thumbnail={thumbnail}
                key={id}
              />
            ))}
          </div>
        </section>
      )}
    </>
  );
};
