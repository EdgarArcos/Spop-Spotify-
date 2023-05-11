import { ContainerEachGenre } from "./ContainerEachGenre";
import { getMusicRequest } from "../../api/api-utils";
import { useQuery } from "@tanstack/react-query";

const ContainerAllGenres = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["genres"],
    queryFn: () => getMusicRequest("genres"),
  });
  return (
    <div className="pb-4 w-screen min-h-screen pt-10 sm:pl-[16rem]">
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
