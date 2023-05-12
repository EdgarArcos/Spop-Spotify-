import { SiDiscogs } from "react-icons/si";

export const ContainerGenres = ({ genresArr }) => {
  return (
    <div className="w-full flex flex-row gap-3 flex-wrap align-middle justify-start pb-24">
      {genresArr.map(({ name }) => (
        <div className="w-32 h-32 flex flex-col items-center justify-around py-3 border border-teal cursor-pointer">
          <span className="text-xl">{name.toUpperCase()}</span>
          <SiDiscogs className="text-6xl" />
        </div>
      ))}
    </div>
  );
};
