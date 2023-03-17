import { useEffect, useState } from "react";
import { makeRequest } from "../../api/api-utils";
import { ContainerEachGenre } from "./ContainerEachGenre";

export const ContainerAllGenres = () => {
  const [genres, setGenres] = useState([]);
  useEffect(() => {
    makeRequest("genres").then((data) => setGenres(data));
  }, []);

  return (
    <div className="pb-4">
      {genres.map(({ name }) => (
        <ContainerEachGenre key={name} genre={name} />
      ))}
    </div>
  );
};
