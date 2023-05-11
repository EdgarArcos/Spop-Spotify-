import React from 'react'
import { useForm } from "react-hook-form";
import { useSongs } from "../../context/SongContext/SongContext";
import { useAuth0 } from "@auth0/auth0-react";
export const ModalSong = ({ isVisible, onClose }) => {
    const { createSong } = useSongs()
    const { register, handleSubmit } = useForm()
    const { user } = useAuth0()

    const onSubmit = async (data) => {
        const song = data.file[0]
        const image = data.image[0]
        await createSong({
            name: data.name,
            artist: user.nickname,
            genre: data.genre,
            song: song,
            image: image
        })
        onClose()
    }
    if (!isVisible) return null
    return (
        <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
            <div className='text-center py-10'>
                <div className='pl-6'><button className='text-white text-xl pl-96' onClick={() => { onClose() }}>X</button></div>
                <form onSubmit={handleSubmit(onSubmit)} className='bg-slate-50 text-black rounded-xl'>
                    <div className=" pt-4 pb-2">
                        <label className='text-xl'>Title</label>
                    </div>
                    <div>
                        <input className="border-2" type='text' {...register('name', {
                            required: true,
                            maxLength: 15
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
                            <option value="Country">Country</option>
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
                    <div className="pt-4 pb-2">
                        <label className="text-xl">File Song</label>
                    </div>
                    <div>
                        <input type='file' {...register('file', {
                            required: false,
                        })} />
                    </div>
                    <div className="pt-4 pb-2">
                        <label className="text-xl">File Image</label>
                    </div>
                    <div>
                        <input type='file' {...register('image', {
                            required: true,
                        })} />
                    </div>
                    <div className='pt-2 pb-4' >
                        <input className="bg-green-600 px-4 py-2 rounded mt-2 text-white focus:outline-none disabled:bg-green-400 hover:bg-green-500" type='submit' value="Save"></input>
                    </div>

                </form>
            </div>
        </div>
    )
}
