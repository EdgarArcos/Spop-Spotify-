// import { ContainerAllGenres } from "../components/HomePage";
import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { AudioBar } from "../components/AudioBar/AudioBar";
import { NavBarMov, SideMenu } from "../components/Reusable";
import { MusicContext } from "../context/MusicContext/MusicContext";
import { useScreenWidth } from "../hooks/useScreenWidth";

export const Home = () => {
  const { musicState } = useContext(MusicContext);
  const { likelist, playOn, indexPlay } = musicState;
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
      <Outlet />
      <div className="fixed bottom-3 p-3 w-full sm:w-11/12">
        <AudioBar
          url={playOn ? likelist[indexPlay].url : ""}
          name={playOn ? likelist[indexPlay].name : ""}
          artist={playOn ? likelist[indexPlay].artist : ""}
        />
      </div>
    </>
  );
};
