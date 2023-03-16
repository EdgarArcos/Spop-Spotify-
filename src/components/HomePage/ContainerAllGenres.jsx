import { useEffect, useState } from "react";
import { makeRequest } from "../../api/api-utils";
import { ContainerEachGenre } from "./ContainerEachGenre";

export const ContainerAllGenres = () => {
  const [genres, setGenres] = useState([]);
  useEffect(() => {
    makeRequest("genres").then((data) => setGenres(data));
  }, []);

  return (
    <div>
      {genres.map(({ name }) => (
        <ContainerEachGenre genre={name} />
      ))}
    </div>
  );
};
