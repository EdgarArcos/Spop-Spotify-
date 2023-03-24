// import { ContainerAllGenres } from "../components/HomePage";
import { useContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { AudioBar } from "../components/AudioBar/AudioBar";
import { NavBarMov, SideMenu } from "../components/Reusable";
import { MusicContext } from "../context/MusicContext/MusicContext";
import { useScreenWidth } from "../hooks/useScreenWidth";

export const Home = () => {
  const screenWidth = useScreenWidth();
  const { musicState } = useContext(MusicContext);
  const { likelist, playOn, indexPlay, random } = musicState;

  const [musicToPlay, setMusicToPlay] = useState(null);

  const randomList = (listArr) => listArr.sort(() => Math.random() - 0.5);

  useEffect(() => {
    const newList = [...likelist];
    if (random) {
      setMusicToPlay(randomList(newList));
    } else {
      setMusicToPlay(likelist);
    }
  }, [likelist, random]);

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
      <div className="bottom-3 p-3 flex flex-row h-24 bg-newgray text-white w-11/12 items-center justify-center fixed rounded-md ml-14">
        <AudioBar
          url={playOn ? musicToPlay[indexPlay].url : ""}
          name={playOn ? musicToPlay[indexPlay].name : ""}
          artist={playOn ? musicToPlay[indexPlay].artist : ""}
        />
      </div>
    </>
  );
};
