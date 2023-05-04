import { useEffect, useState } from "react";
import { makeRequest } from "../../api/api-utils";
import { SongCard } from "../Reusable";
import { AiFillFire } from "react-icons/ai";
import { getMusicRequest } from "../../api/api-utils";
import { useQuery } from "@tanstack/react-query";

export const ContainerEachGenre = ({ genre }) => {
  const { isLoading, error, data } = useQuery({
    queryKey: [genre],
    queryFn: () => getMusicRequest(genre),
  });

  return (
    <>
      {error && <p>An error has occurred: {error.message}</p>}
      {!isLoading && data.data.songs.length > 0 && (
        <section className="w-full pb-2">
          <h2 className="px-4 text-teal flex align-middle justify-start">
            <AiFillFire className="self-center mr-1" />
            {genre.toUpperCase()}
          </h2>
          <div className="px-4 pt-2 flex flex-row gap-4 flex-nowrap align-middle justify-start overflow-x-auto">
            {data.data.songs.map(({ _id, name, url, img }) => (
              <SongCard
                id={_id}
                name={name}
                urlSong={url}
                img={img}
                key={_id}
              />
            ))}
          </div>
        </section>
      )}
    </>
  );
};
