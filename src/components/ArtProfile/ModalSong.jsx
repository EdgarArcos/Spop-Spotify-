import { useContext } from 'react'
import { useForm } from "react-hook-form";
import { useSongs } from "../../context/SongContext/SongContext";
import { UsersContext } from "../../context/UsersContext"
export const ModalSong = ({ isVisible, onClose }) => {
    const { createSong } = useSongs()
    const { register, handleSubmit, formState } = useForm()
    const { isSubmitting } = formState
    const { user } = useContext(UsersContext);
    const onSubmit = async (data) => {
        const song = data.file[0]
        const image = data.image[0]
        await createSong({
            name: data.name,
            artist: user.name,
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
                <div className=''><button className='text-white text-xl pl-80' onClick={() => { onClose() }}>X</button></div>
                <form onSubmit={handleSubmit(onSubmit)} className='bg-slate-50 text-black rounded-xl'>
                    <div className=" text-center py-10">
                        <div>
                            <label className='text-lg'>Title</label>
                        </div>
                        <div>
                            <input className="border-2" type='text' {...register('name', {
                                required: true,
                                maxLength: 30
                            })} />
                        </div>
                        <div className="pt-4 pb-2">
                            <label className="text-lg">Genre</label>
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
                        <div className="pt-4 pb-2">
                            <label className="text-lg ">File Song</label>
                        </div>
                        <label className=' bg-teal px-4 py-2 rounded text-white '>
                            Subir Cancion
                            <input className='hidden' type='file' {...register('file', {
                                required: false,
                            })} />
                        </label>
                        <div className="pt-4 pb-2">
                            <label className="text-lg">File Image</label>
                        </div>
                        <label className=' bg-teal px-4 py-2 rounded text-white '>
                            Subir imagen
                            <input className='hidden' type='file' {...register('image', {
                                required: true,
                            })} />
                        </label>
                        <div className='pt-2 pb-4' >
                            <input disabled={isSubmitting} className="bg-teal px-4 py-2 rounded mt-6 text-white focus:outline-none disabled:bg-newblack hover:cyan-800" type='submit' value="Save"></input>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
