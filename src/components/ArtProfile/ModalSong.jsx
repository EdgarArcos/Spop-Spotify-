import React from 'react'
import { useForm } from "react-hook-form";
import { useSongs } from "../../context/SongContext/SongContext";
import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
export const ModalSong = () => {
    const { createSong } = useSongs()
    const { register, handleSubmit } = useForm()
    const { user } = useAuth0()
    const [createdSong, setCreatedSong] = useState({
        name: "",
        artist: null,
        genre: "",
        song: null
    })
    const onSubmit = async (data) => {
        setCreatedSong({
            name: data.name,
            artist: user.nickname,
            genre: data.genre,
            song: data.file
        })
        await createSong(data)
    }

    return (
        <div>
            <h2>Formulario</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
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
                    <label>File</label>
                    <input type='file' {...register('file', {
                        required: true,
                    })} />
                </div>
                <input type='submit' value="Save"></input>
            </form>
        </div>
    )
}
