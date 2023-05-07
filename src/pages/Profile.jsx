import { useState } from "react";
import { ContainerLists } from "../components/Profile/ContainerLists";
import { HeaderProfile } from "../components/Profile/HeaderProfile";
import { EditUserInfo } from "../components/Profile/EditUserInfo";

export const Profile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEditUserInfo = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="sm:pl-[16rem]">
      <HeaderProfile handleEditUserInfo={handleEditUserInfo} />
      <ContainerLists />
      {isModalOpen && <EditUserInfo handleEditUserInfo={handleEditUserInfo} />}
    </div>
  );
};
