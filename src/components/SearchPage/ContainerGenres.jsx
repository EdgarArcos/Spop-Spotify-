import { SiDiscogs } from "react-icons/si";
import { useNavigate } from "react-router-dom";

export const ContainerGenres = ({ genresArr }) => {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-2 place-items-center gap-y-7 p-5 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7">
      {genresArr &&
        genresArr.map(({ name }) => (
          <div
            key={name}
            className="w-36 h-36 rounded-xl flex flex-col items-center justify-around p-3 border border-teal cursor-pointer"
            onClick={() => navigate(`/search/${name}`)}
          >
            <span className="text-xl">{name.toUpperCase()}</span>
            <SiDiscogs className="text-6xl" />
          </div>
        ))}
    </div>
  );
};
