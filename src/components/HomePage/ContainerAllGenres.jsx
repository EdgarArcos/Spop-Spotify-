import { useEffect, useState } from "react";
import { makeRequest } from "../../api/api-utils";
import { ContainerEachGenre } from "./ContainerEachGenre";
import { NavBarMov } from "./NavBarMov";

export const ContainerAllGenres = () => {
  const [genres, setGenres] = useState([]);
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    makeRequest("genres").then((data) => setGenres(data));
    const handleWidth = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleWidth);
    return () => window.removeEventListener("resize", handleWidth);
  }, []);

  return (
    <div className="sm:flex">
      {screenWidth < 640 ? <NavBarMov /> : <div className="bg-teal w-40"></div>}
      <div className="pb-4">
        {genres.map(({ name }) => (
          <ContainerEachGenre key={name} genre={name} />
        ))}
      </div>
    </div>
  );
};
