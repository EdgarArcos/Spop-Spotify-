import { useState } from "react";
import { ContainerLists } from "../components/Profile/ContainerLists";
import { HeaderProfile } from "../components/Profile/HeaderProfile";
import { EditUserInfo } from "../components/Profile/EditUserInfo";

export const Profile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const editUserInfo = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="sm:pl-[16rem]">
      <HeaderProfile editUserInfo={editUserInfo} />
      <ContainerLists />
      {isModalOpen && <EditUserInfo />}
    </div>
  );
};
