import { useEffect, useState } from "react";
import { makeRequest } from "../../api/api-utils";
import { SongCard } from "./SongCard";

export const ContainerEachGenre = ({ genre }) => {
  const [songsByGenre, setSongsByGenre] = useState([]);
  useEffect(() => {
    makeRequest(`tracks?genre=${genre}`).then((data) => setSongsByGenre(data));
  }, []);

  return (
    <>
      {songsByGenre.length > 0 && (
        <div>
          <h3>{genre.toUpperCase()}</h3>
          {songsByGenre.map(({ id, name, url }) => (
            <SongCard id={id} name={name} url={url} />
          ))}
        </div>
      )}
    </>
  );
};
