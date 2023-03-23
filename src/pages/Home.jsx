import { ContainerAllGenres } from "../components/HomePage";
import { NavBarMov, SideMenu } from "../components/Reusable";
import { useScreenWidth } from "../hooks/useScreenWidth";

export const Home = () => {
  const screenWidth = useScreenWidth();

  return (
    <>
      {screenWidth < 640 ? (
        <NavBarMov currentPage="home" />
      ) : (
        <div className="h-screen fixed w-60 ">
          <SideMenu />
        </div>
      )}
      <ContainerAllGenres />
    </>
  );
};
