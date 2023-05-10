import toast from "react-hot-toast";
import { useSongs } from "../../context/SongContext/SongContext";
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { MusicContext } from "../../context/MusicContext/MusicContext";
import ModalEditSong from "./ModalEditSong";
import { FaPlay } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa"
import { BsTrash3Fill } from "react-icons/bs";

export default function Cardsongs({ song, index }) {
    const [showEdit, setShowEdit] = useState(false)
    const { handlePlayOn, handleIndex } = useContext(MusicContext);
    const { deleteSong } = useSongs()
    const navigate = useNavigate()
    const handleEdit = (_id) => {
        navigate(`/artist/${song._id}`)
        setShowEdit(true)
    }
    const handleDelete = (_id) => {
        toast((t) => (
            <div className="text-center">
                <p>¿Do you want to delete? <strong className="break-all">{song.name}</strong></p>
                <div className=" my-1 text-center pt-2">
                    <button onClick={() => { toast.dismiss(t.id); deleteSong(_id) }} className="bg-red-600 text-white px-2 py-1 ml-5 rounded-md hover:bg-red-500">Delete</button>
                    <button onClick={() => toast.dismiss(t.id)} className="bg-slate-600 text-white px-2 py-1 ml-5 rounded-md hover:bg-slate-500">Cancel</button>
                </div>
            </div>
        ))
    }
    return (
        <tbody onClick={() => handlePlay(index)}>
            <tr className="group/item flex hover:bg-newgray rounded-md cursor-pointer sm:grid sm:grid-cols-2 md:grid md:grid-cols-3 lg:grid lg:grid-cols-4  gap-4 sm:justify-center m-3">
                <td className="hidden sm:flex justify-center pt-12">
                    <p className="visible group-hover/item:invisible">{index + 1}</p>
                    <FaPlay className="invisible group-hover/item:visible flex justify-center" />
                </td>
                <td className="flex sm:grid sm:grid-cols-2">
                    <div className="flex sm:hidden">
                        <img
                            className="rounded-2xl w-20 max-w-none"
                            src={song.image.url}
                            alt={song.name}
                        />
                        <div className="flex-row ml-3 items-center">
                            <p className="font-bold">{song.name}</p>
                            <p className="text-graytext font-bold">{song.artist} </p>
                        </div>
                    </div>
                    <div className="pt-5">
                        <img
                            className="hidden sm:grid sm:col-span-1 rounded-2xl w-20"
                            src={song.image.url}
                            alt={song.name}
                        />
                    </div>
                    <p className="hidden sm:grid sm:col-span-1  pt-5 pl-1">{song.name}</p>
                </td>
                <td className="hidden md:grid pt-14 justify-start pl-5 font-bold text-graytext">
                    {song.artist}
                </td>
                <td>
                    <div className=" my-1 text-end ml-4 pt-5 pr-5">
                        <button className="ml-5 bg-orange-600 text-sm px-4 py-2 rounded-sm hover:bg-orange-500" onClick={() => handleEdit()}><FaPencilAlt /></button>
                        <button className="bg-red-600 text-sm px-4 py-2 ml-5 rounded-sm hover:bg-red-500" onClick={() => handleDelete(song._id, song.name)}><BsTrash3Fill /></button>
                    </div>
                    <div>
                        <ModalEditSong isvisible={showEdit} onClose={() => setShowEdit(false)} />
                    </div>
                </td>
            </tr>
        </tbody>
    )
}
