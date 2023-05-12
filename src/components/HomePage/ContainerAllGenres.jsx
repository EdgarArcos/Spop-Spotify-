import { ContainerEachGenre } from "./ContainerEachGenre";
import { getMusicRequest } from "../../api/api-utils";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

const ContainerAllGenres = () => {
  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["genres"],
    queryFn: () => getMusicRequest("genres"),
  });

  useEffect(() => {
    refetch();
  }, []);

  return (
    <div className="pb-24 w-screen min-h-screen pt-10 sm:pl-[16rem]">
      {error && <p>An error has occurred: {error.message}</p>}
      {isLoading ? (
        <p>Is Loading...</p>
      ) : (
        data.data.genres.map((genre) => (
          <ContainerEachGenre key={genre._id} genre={genre.name} />
        ))
      )}
    </div>
  );
};

export default ContainerAllGenres;
