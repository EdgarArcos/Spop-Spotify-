import { useForm } from "react-hook-form";
import { useSongs } from '../../context/SongContext/SongContext';
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
export default function ModalEditSong({ isvisible, onClose }) {
    const { getSong, updateSong } = useSongs()
    const { register, handleSubmit } = useForm()
    const navigate = useNavigate()
    const [song, setSong] = useState({
        name: "",
        genre: ""
    })
    const params = useParams()
    useEffect(() => {
        (async () => {
            if (params.id) {
                const song = await getSong(params.id)
                setSong(song)
            }
        })()
    }, [params.id])
    const onSubmit = async (data) => {
        updateSong(song._id, data)
        navigate(`/artist`)
        onClose()
    }
    if (!isvisible) return null
    return (
        <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
            <div>
                <div className='pl-6'><button className='text-white text-xl pl-80 ' onClick={() => { onClose(), navigate("/artist") }}>X</button></div>
                <form onSubmit={handleSubmit(onSubmit)} className=" bg-slate-50 text-black rounded-xl">
                    <div className=" text-center py-10 px-20">
                        <div className="pb-2">
                            <label className="text-xl">Title</label>
                        </div>
                        <div>
                            <input className="border-2" type='text' {...register('name', {
                                required: true,
                                maxLength: 30,
                            })} />
                        </div>
                        <div className="pt-4 pb-2">
                            <label className="text-xl">Genre</label>
                        </div>
                        <div>
                            <select {...register("genre")}>
                                <option value="pop">PoP</option>
                                <option value="blues">Blues</option>
                                <option value="metal">Metal</option>
                                <option value="classical">Classical</option>
                                <option value="country">Country</option>
                                <option value="grunge">Grunge</option>
                                <option value="jazz">Jazz</option>
                                <option value="rock">Rock</option>
                                <option value="soul">Soul</option>
                                <option value="funk">Funk</option>
                                <option value="folk">Folk</option>
                                <option value="indie">Indie</option>
                                <option value="electronic">Electronic</option>
                            </select>
                        </div>
                        <div className=" pt-2">
                            <input className="bg-teal px-4 py-2 rounded mt-2 text-white focus:outline-none disabled:bg-teal hover:bg-cyan-800" type='submit' value="Save"></input>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
