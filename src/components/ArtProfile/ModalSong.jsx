import React from 'react'
import { useForm } from "react-hook-form";
export const ModalSong = () => {

    const { register, handleSubmit } = useForm()

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <div>
            <h2>Formulario</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Title</label>
                    <input type='text' {...register('Title', {
                        required: true,
                        maxLength: 15
                    })} />
                </div>
                <div>
                    <label>Genre</label>
                    <select {...register("genero")}>
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
    )
}
