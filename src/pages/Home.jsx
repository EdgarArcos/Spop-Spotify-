import { useContext, useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { AudioBar } from "../components/AudioBar/AudioBar";
import { NavBarMov, SideMenu } from "../components/Reusable";
import { MusicContext } from "../context/MusicContext/MusicContext";
import { useScreenWidth } from "../hooks/useScreenWidth";

export const Home = () => {
  const screenWidth = useScreenWidth();
  const location = useLocation();
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
        <NavBarMov currentPage={location.pathname} />
      ) : (
        <div className="h-screen fixed w-60 ">
          <SideMenu />
        </div>
      )}
      <Outlet />
      <div className="fixed w-11/12 ml-4 bottom-[5rem] flex flex-row justify-evenly rounded-md bg-newgray text-white sm:bottom-3 sm:p-6 sm:h-24 sm:w-11/12 sm:items-center sm:justify-center sm:ml-14">
        <AudioBar
          url={playOn ? musicToPlay[indexPlay].url : ""}
          name={playOn ? musicToPlay[indexPlay].name : ""}
          artist={playOn ? musicToPlay[indexPlay].artist : ""}
        />
      </div>
    </>
  );
};
