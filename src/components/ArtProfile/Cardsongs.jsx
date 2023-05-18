import toast from "react-hot-toast";
import { useSongs } from "../../context/SongContext/SongContext";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ModalEditSong from "./ModalEditSong";
import { FaPencilAlt } from "react-icons/fa";
import { BsTrash3Fill } from "react-icons/bs";

export default function Cardsongs({ song }) {
  const [showEdit, setShowEdit] = useState(false);
  const { deleteSong } = useSongs();
  const navigate = useNavigate();
  const params = useParams()
  const handleEdit = (_id) => {
    navigate(`/artist/${song._id}`);
  };
  useEffect(() => {
    if (params.id === song._id) {
      setShowEdit(true)
    }
  }, [])
  const handleDelete = (_id) => {
    toast((t) => (
      <div className="text-center">
        <p>
          Do you want to delete?{" "}
          <strong className="break-all">{song.name}</strong>
        </p>
        <div className=" my-1 text-center pt-2">
          <button
            onClick={() => {
              toast.dismiss(t.id);
              deleteSong(_id);
            }}
            className="bg-teal text-newblack px-2 py-1 ml-5 rounded-md hover:bg-graytext hover:text-teal"
          >
            Delete
          </button>
          <button
            onClick={() => toast.dismiss(t.id)}
            className="bg-slate-200 text-newblack px-2 py-1 ml-5 rounded-md hover:bg-graytext hover:text-teal"
          >
            Cancel
          </button>
        </div>
      </div>
    ));
  };
  return (
    <tbody>
      <tr className="group/item flex hover:bg-newgray rounded-md cursor-pointer sm:grid sm:grid-cols-2 md:grid md:grid-cols-3 lg:grid lg:grid-cols-4  gap-4 sm:justify-center m-3">
        <td className="hidden sm:flex justify-center ">
          <div>
            <img
              className="hidden sm:grid sm:col-span-1 rounded-2xl w-20 h-20 "
              src={song.img}
              alt={song.name}
            />
          </div>
        </td>
        <td className="flex sm:grid sm:grid-cols-2">
          <div className="flex sm:hidden">
            <img
              className="rounded-2xl w-20 max-w-none"
              src={song.img}
              alt={song.name}
            />
            <div className="flex-row ml-3 items-center">
              <p className="font-bold">{song.name}</p>
              <p className="text-graytext font-bold">{song.artist} </p>
            </div>
          </div>
          <p className="hidden sm:grid sm:col-span-2 pt-5 text-center ">{song.name}</p>
        </td>
        <td className="hidden md:grid pt-5  font-bold text-graytext text-center">
          {song.artist}
        </td>
        <td>
          <div className=" my-1 text-end ml-4 pt-5 pr-5">
            <button
              className="ml-5 bg-orange-600 text-sm px-4 py-2 rounded-sm hover:text-teal"
              onClick={() => handleEdit()}
            >
              <FaPencilAlt />
            </button>
            <button
              className="text-sm px-4 py-2 ml-5 rounded-sm hover:text-red-500"
              onClick={() => handleDelete(song._id)}
            >
              <BsTrash3Fill />
            </button>
          </div>
          <div>
            <ModalEditSong
              isvisible={showEdit}
              onClose={() => setShowEdit(false)}
            />
          </div>
        </td>
      </tr>
    </tbody>
  );
}
