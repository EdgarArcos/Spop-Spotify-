import toast from "react-hot-toast";
import { useSongs } from "../../context/SongContext/SongContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ModalEditSong from "./ModalEditSong";

export default function Cardsongs({ song }) {
    const [showEdit, setShowEdit] = useState(false)
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
                <div className=" my-1 text-center">
                    <button onClick={() => { toast.dismiss(t.id); deleteSong(_id) }} className="bg-red-600 text-white px-2 py-1 ml-5 rounded-sm hover:bg-red-500">Delete</button>
                    <button onClick={() => toast.dismiss(t.id)} className="bg-slate-600 text-white px-2 py-1 ml-5 rounded-sm hover:bg-slate-500">Cancel</button>
                </div>
            </div>
        ))
    }
    return (
        <div className="text-white">
            <div className=" rounded-2xl bg-zinc-800 hover:bg-zinc-700 hover:cursor-pointer ">
                <div className=" px-12 py-5">
                    <div className=" my-1 text-end">
                        <button className="ml-5 bg-orange-600 text-sm px-4 py-2 rounded-sm hover:bg-orange-500" onClick={() => handleEdit()}>Edit</button>
                        <button onClick={() => handleDelete(song._id, song.name)} className="bg-red-600 text-sm px-4 py-2 ml-5 rounded-sm hover:bg-red-500">Delete</button>
                    </div>
                    <div className="text-center">
                        <h2 className=" break-all text-xl uppercase">{song.name}</h2>
                    </div>
                    <div className="inline ">
                        <p className="m-1 break-all">{song.artist}</p>
                    </div>
                    <div className="mt-6">
                        {song.image && <img className="rounded-xl h-auto max-w-full" src={song.image.url} />}
                    </div>
                    <div className="mt-6">
                        {song.song && <button src={song.song.url}>Play</button>}
                    </div>
                </div>
            </div>
            <ModalEditSong isvisible={showEdit} onClose={() => setShowEdit(false)} />
        </div>
    )
}
