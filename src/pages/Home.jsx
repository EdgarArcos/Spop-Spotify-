import { useContext, useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { AudioBar } from "../components/AudioBar/AudioBar";
import { NavBarMov, SideMenu } from "../components/Reusable";
import { MusicContext } from "../context/MusicContext/MusicContext";
import { useScreenWidth } from "../hooks/useScreenWidth";
import { useAuth0 } from "@auth0/auth0-react";
import { auth0loginRequest } from "../api/userRequests";
import { UsersContext } from "../context/UsersContext";

export const Home = () => {
  const screenWidth = useScreenWidth();
  const location = useLocation();
  const { musicState, userMusic } = useContext(MusicContext);
  const { playOn, indexPlay, random, currentList } = musicState;
  const randomList = (listArr) => listArr.sort(() => Math.random() - 0.5);

  const [musicToPlay, setMusicToPlay] = useState(
    // random ? randomList([...currentList]) : currentList
    currentList
  );
  const { user } = useAuth0();
  const { auth0Login } = useContext(UsersContext);

  useEffect(() => {
    const newList = [...currentList];
    if (random) {
      setMusicToPlay(randomList(newList));
    } else {
      setMusicToPlay(currentList);
    }
  }, [currentList, musicState, random]);

  useEffect(() => {
    async function fetchData() {
      if (user?.email && user?.name) {
        const { name, email } = user;
        const response = await auth0loginRequest({ name, email });
        if (response && response.data.user) {
          auth0Login(response.data.user);
          userMusic(response.data.playlist);
        } else {
          console.log("Error");
        }
      }
    }

    fetchData();
  }, [user]);

  return (
    <div className="w-full">
      {screenWidth < 640 ? (
        <NavBarMov currentPage={location.pathname} />
      ) : (
        <SideMenu />
      )}
      <Outlet />
      <div className="fixed w-11/12 ml-4 bottom-[5rem] flex flex-row justify-evenly rounded-md bg-newgray text-white sm:bottom-3 sm:p-6 sm:h-24 sm:w-11/12 sm:items-center sm:justify-center sm:ml-14">
        <AudioBar
          url={musicToPlay[indexPlay]?.url}
          name={musicToPlay[indexPlay]?.name}
          artist={musicToPlay[indexPlay]?.artist}
        />
      </div>
    </div>
  );
};
