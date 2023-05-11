
import { useContext } from 'react';
import { deletePlaylistFetch } from '../../api/playlistRequests';
import { MusicContext } from '../../context/MusicContext/MusicContext';
import { useNavigate } from 'react-router-dom';

export const MyMenuModal = ({ visible, onClose, playlist }) => {

    const {handleDeletePlaylist} = useContext(MusicContext)

    const navigate = useNavigate();

    const handleClose = () => {
        onClose()
    }

    if (!visible) return null;

    const deletePlaylist = async() =>{
        const response = await deletePlaylistFetch(playlist._id);
        console.log(response)
        if(response.data.ok) {
            handleDeletePlaylist(playlist._id)
            navigate("/");
        }

    }



return (
    <div onClick={handleClose} className="fixed ml-16 mt-52 bg-black bg-opacity-30 flex justify-center items-center">
        <ul className="bg-gradient-to-b from-zinc-700 to-zinc-900 smborder-b border-graytext p-6 ">
            <li className="pb-2">Go premium</li>
            <li className="pb-2" onClick={deletePlaylist}>Delete playlist</li>
            <li className="pb-2">Go to your profile</li>
            <li className="pb-2">Go home</li>
            <li>Share</li>
            

        </ul>
    </div>
    )
}

