import { useScreenWidth } from "../../hooks/useScreenWidth";
import { SideMenu } from "../LikeLibrary/SideMenu";
import { NavBarMov } from "../HomePage/NavBarMov";

export const SearchContainer = () => {
  const screenWidth = useScreenWidth();

  return (
    <div>
      {screenWidth < 640 ? (
        <NavBarMov />
      ) : (
        <div className="h-screen fixed w-60 ">
          <SideMenu />
        </div>
      )}
    </div>
  );
};
