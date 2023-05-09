import { useForm } from "react-hook-form";
import { useSongs } from '../../context/SongContext/SongContext';
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
export default function ModalEditSong({ isvisible, onClose }) {
    const { getSong, updateSong } = useSongs()
    const { register, handleSubmit } = useForm()
    const navigate = useNavigate()
    const [song, setSong] = useState({
        title: "",
        description: ""
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
                <div className='pl-6'><button className='text-white text-xl pl-96' onClick={() => { onClose(), navigate("/artist") }}>X</button></div>
                <form onSubmit={handleSubmit(onSubmit)} className=' bg-red-700'>
                    <div>
                        <label>Title</label>
                        <input type='text' {...register('name', {
                            required: true,
                            maxLength: 15,
                        })} />
                    </div>
                    <div>
                        <label>Genre</label>
                        <select {...register("genre")}>
                            <option value="PoP">PoP</option>
                            <option value="Rock">Rock</option>
                            <option value="Soul">Soul</option>
                            <option value="Funk">Funk</option>
                            <option value="Folk">Folk</option>
                            <option value="Indie">Indie</option>
                            <option value="Electric">Electric</option>
                        </select>
                    </div>
                    <input type='submit' value="Save"></input>
                </form>
            </div>
        </div>
    )
}
