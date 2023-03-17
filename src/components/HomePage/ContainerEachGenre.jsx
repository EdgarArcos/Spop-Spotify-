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
        <section className="pt-4 w-full">
          <h3 className="px-4 py-2 text-teal flex align-middle justify-start">
            <AiFillFire className="self-center mr-1" />
            {genre.toUpperCase()}
          </h3>
          <div className="px-2 flex flex-row flex-nowrap align-middle justify-start overflow-x-scroll">
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
