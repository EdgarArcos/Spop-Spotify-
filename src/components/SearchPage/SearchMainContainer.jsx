import { useScreenWidth } from "../../hooks/useScreenWidth";
import { SideMenu } from "../LikeLibrary/SideMenu";
import { NavBarMov } from "../Reusable";
import { SearchResultsContainer } from "./SearchResultsContainer";

export const SearchMainContainer = () => {
  const screenWidth = useScreenWidth([]);

  return (
    <div>
      {screenWidth < 640 ? (
        <NavBarMov currentPage="search" />
      ) : (
        <div className="h-screen fixed w-60 ">
          <SideMenu />
        </div>
      )}
      <SearchResultsContainer />
    </div>
  );
};
