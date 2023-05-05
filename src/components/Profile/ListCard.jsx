import { IoMdMusicalNotes } from "react-icons/io";

export const ListCard = ({ list }) => {
  return (
    <div className="flex pt-1">
      <div className="w-9 h-9 overflow-hidden">
        {list.img ? (
          <img src={list.img} alt="img" className="w-9 h-9 object-cover" />
        ) : (
          <IoMdMusicalNotes className="text-4xl" />
        )}
      </div>
      <h3 className="p-2">{list.name}</h3>
    </div>
  );
};
