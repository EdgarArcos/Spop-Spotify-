import { useEffect, useState } from "react";
import { makeRequest } from "../../api/api-utils";
import { useScreenWidth } from "../../hooks/useScreenWidth";
import { SideMenu } from "../LikeLibrary/SideMenu";
import { ContainerEachGenre } from "./ContainerEachGenre";
import { NavBarMov } from "./NavBarMov";

export const ContainerAllGenres = () => {
  const [genres, setGenres] = useState([]);
  const screenWidth = useScreenWidth();

  useEffect(() => {
    makeRequest("genres").then((data) => setGenres(data));
  }, []);

  return (
    <div className="w-full pt-5 sm:flex">
      {screenWidth < 640 ? (
        <NavBarMov />
      ) : (
        <div className="h-screen fixed w-60 ">
          <SideMenu />
        </div>
      )}
      <div className="pb-4 w-screen sm:pl-[16rem]">
        {genres.map(({ name }) => (
          <ContainerEachGenre key={name} genre={name} />
        ))}
      </div>
    </div>
  );
};
