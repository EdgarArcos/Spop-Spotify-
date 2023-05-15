import { useContext, useState } from "react";
import { ContainerLists } from "../components/Profile/ContainerLists";
import { HeaderProfile } from "../components/Profile/HeaderProfile";
import { EditUserInfo } from "../components/Profile/EditUserInfo";
import { MusicContext } from "../context/MusicContext/MusicContext";

const Profile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { musicState } = useContext(MusicContext);

  const handleEditUserInfo = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="sm:pl-[16rem]">
      <HeaderProfile handleEditUserInfo={handleEditUserInfo} />
      <ContainerLists lists={musicState.playlist} />
      {isModalOpen && <EditUserInfo handleEditUserInfo={handleEditUserInfo} />}
    </div>
  );
};

export default Profile;
