import { useContext, useState } from 'react';
import { ContainerLists } from '../components/Profile/ContainerLists';
import { HeaderProfile } from '../components/Profile/HeaderProfile';
import { EditUserInfo } from '../components/Profile/EditUserInfo';
import { MusicContext } from '../context/MusicContext/MusicContext';
import { UsersContext } from '../context/UsersContext';

const Profile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { musicState } = useContext(MusicContext);
  const { user } = useContext(UsersContext);

  const handleEditUserInfo = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="min-[450px]:p-3 sm:pl-[16rem]">
      <HeaderProfile handleEditUserInfo={handleEditUserInfo} />
      <ContainerLists
        lists={musicState.playlist}
        followedLists={user.followedPlaylists}
      />
      {isModalOpen && <EditUserInfo handleEditUserInfo={handleEditUserInfo} />}
    </div>
  );
};

export default Profile;
