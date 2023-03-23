import { MainContainerLibrary } from "../components/LibraryPage";
import { NavBarMov, SideMenu } from "../components/Reusable";
import { useScreenWidth } from "../hooks/useScreenWidth";

export const Library = () => {
  const screenWidth = useScreenWidth();

  return (
    <>
      {screenWidth < 640 ? (
        <NavBarMov currentPage="library" />
      ) : (
        <div className="h-screen fixed w-60 ">
          <SideMenu />
        </div>
      )}
      <MainContainerLibrary />
    </>
  );
};
