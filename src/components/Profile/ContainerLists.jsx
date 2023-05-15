import { useContext, useState } from "react";
import { UsersContext } from "../../context/UsersContext";
import { ListCard } from "./ListCard";

export const ContainerLists = ({ lists }) => {
  return (
    <div className="flex flex-col p-5">
      <h2 className="pb-2">Lists</h2>
      {lists.length > 0 &&
        lists.map((list) => <ListCard key={list._id} list={list} />)}
    </div>
  );
};
