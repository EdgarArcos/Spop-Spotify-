import { useContext, useState } from 'react';
import { UsersContext } from '../../context/UsersContext';
import { ListCard } from './ListCard';

export const ContainerLists = ({
  lists,
  followedLists = [],
  isAnotherUser = false,
}) => {
  return (
    <div className="flex flex-col min-[450px]:flex-row ">
      <div className="flex flex-col p-5">
        <h2 className="pb-2">
          {followedLists.length > 0 ? 'Owned Lists' : 'Lists'}
        </h2>
        {lists.length > 0 &&
          lists.map((list) => (
            <ListCard
              key={list._id}
              list={list}
              followedList={isAnotherUser ? true : false}
            />
          ))}
      </div>
      {followedLists.length > 0 && (
        <div className="flex flex-col p-5 min-[450px]:pl-12">
          <h2 className="pb-2">Followed Lists</h2>
          {followedLists.map((list) => (
            <ListCard key={list._id} list={list} followedList={true} />
          ))}
        </div>
      )}
    </div>
  );
};
