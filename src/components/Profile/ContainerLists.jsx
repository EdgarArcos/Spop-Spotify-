import { useContext, useState } from "react";
import { UsersContext } from "../../context/UsersContext";
import { ListCard } from "./ListCard";

export const ContainerLists = () => {
  const [llistesprova, setLlistesprova] = useState([
    { id: 1, img: "", name: "Mi lista nº1" },
    {
      id: 2,
      img: "https://res.cloudinary.com/duokspzx0/image/upload/v1677661019/boxes/background6_nu9hpc.jpg",
      name: "Mi lista nº1",
    },
  ]);
  return (
    <div className="flex flex-col p-5">
      <h2 className="pb-2">Lists</h2>
      {llistesprova.map((list) => (
        <ListCard key={list.id} list={list} />
      ))}
    </div>
  );
};
