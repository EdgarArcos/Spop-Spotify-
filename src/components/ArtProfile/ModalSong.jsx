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
            <div>
                <div className='pl-6'><button className='text-white text-xl pl-96' onClick={() => { onClose() }}>X</button></div>
                <form onSubmit={handleSubmit(onSubmit)} className=' bg-red-700'>
                    <div>
                        <label>Title</label>
                        <input type='text' {...register('name', {
                            required: true,
                            maxLength: 15
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
                    <div>
                        <label>File Song</label>
                        <input type='file' {...register('file', {
                            required: false,
                        })} />
                    </div>
                    <div>
                        <label>File Image</label>
                        <input type='file' {...register('image', {
                            required: true,
                        })} />
                    </div>
                    <input type='submit' value="Save"></input>
                </form>
            </div>
        </div>
    )
}
