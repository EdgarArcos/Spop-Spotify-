import { useContext, useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { AudioBar } from '../components/AudioBar/AudioBar';
import { NavBarMov, SideMenu } from '../components/Reusable';
import { MusicContext } from '../context/MusicContext/MusicContext';
import { useScreenWidth } from '../hooks/useScreenWidth';
import { useAuth0 } from '@auth0/auth0-react';
import { auth0loginRequest } from '../api/userRequests';
import { UsersContext } from '../context/UsersContext';

const Home = () => {
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
          await auth0Login(response.data.user);
          await userMusic(response.data.playlist);
        } else {
          console.log('Error');
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
      {musicToPlay.length > 0 && (
        <div className="pt-2 px-3 grid h-[3.1rem] fixed w-screen bottom-[2.9rem] bg-newgray text-white sm:bottom-0 sm:p-6 sm:h-24 sm:w-screen">
          <AudioBar
            url={musicToPlay[indexPlay]?.url}
            name={musicToPlay[indexPlay]?.name}
            artist={musicToPlay[indexPlay]?.artist}
            id={musicToPlay[indexPlay]?._id}
          />
        </div>
      )}
    </div>
  );
};

export default Home;
