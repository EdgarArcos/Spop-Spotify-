import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getMusicRequest } from "../../api/api-utils";
import { SongCard } from "../Reusable";

const ContainerResultsByGenre = () => {
  const { genre } = useParams();

  const { isLoading, error, data } = useQuery({
    queryKey: [genre],
    queryFn: () => getMusicRequest(genre),
  });

  return (
    <div className="w-full p-7 sm:pl-[16rem]">
      <h2 className="text-4xl sm:text-5xl lg:text-6xl pb-1 border-b">
        {genre.toUpperCase()}
      </h2>
      <div className="py-7 grid grid-cols-2 place-items-center gap-y-4 p-5 md:grid-cols-3 lg:grid-cols-5 lg:px-0 xl:grid-cols-6 2xl:grid-cols-7">
        {error && <p>An error has occurred: {error.message}</p>}
        {!isLoading && data.data.songs.map((song) => <SongCard song={song} />)}
      </div>
    </div>
  );
};

export default ContainerResultsByGenre;
