import { IoMdMusicalNotes } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export const ListCard = ({ list }) => {
  const navigate = useNavigate();

  return (
    <div
      className="flex pt-1 cursor-pointer"
      onClick={() => navigate(`/search/playlist/${list._id}`)}
    >
      <div className="w-9 h-9 overflow-hidden rounded">
        {list.img ? (
          <img src={list.img} alt="img" className="w-9 h-9 object-cover" />
        ) : (
          <IoMdMusicalNotes className="text-4xl" />
        )}
      </div>
      <h3 className="p-2">{list.title}</h3>
    </div>
  );
};
