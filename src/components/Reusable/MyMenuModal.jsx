import { useContext, useState } from 'react';
import {
  createplaylistFetch,
  deletePlaylistFetch,
} from '../../api/playlistRequests';
import { MusicContext } from '../../context/MusicContext/MusicContext';
import { useNavigate } from 'react-router-dom';
import { UsersContext } from '../../context/UsersContext';
import { EditTitle } from '../CreateList/EditTitle';
import { IoCloseOutline } from 'react-icons/io5';

export const MyMenuModal = ({ visible, onClose, playlist }) => {
  const { user } = useContext(UsersContext);

  const { musicState, handleAddPlaylist, handleDeletePlaylist } =
    useContext(MusicContext);
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);
  const [showMenuModal, setShowMenuModal] = useState(true);

  const handleClose = () => {
    onClose();
  };

  if (!visible) return null;

  const deletePlaylist = async () => {
    const response = await deletePlaylistFetch(playlist._id);
    if (response.data.ok) {
      handleDeletePlaylist(playlist._id);
      navigate('/');
    }
  };

  const handleCreate = async () => {
    const res = await createplaylistFetch(user._id);
    if (res.data.ok) {
      handleAddPlaylist(res.data.playlist);
      navigate(`/playlist/${res.data.playlist._id}`);
    }
  };

  const handleEditPlaylist = () => {
    setShowModal(true);
    setShowMenuModal(false);
  };

  const handleCloseEditModal = () => {
    setShowModal(false);
    setShowMenuModal(true);
  };
  return (
    <div>
      {showMenuModal && (
        <div className="fixed inset-0 top-0  bg-black bg-opacity-30 flex justify-center items-center">
          <ul className="bg-gradient-to-b from-zinc-700 to-zinc-900 smborder-b border-newblack border-2  p-6 ">
            <li
              className="p-2  hover:bg-newgray rounded-md cursor-pointer"
              onClick={handleCreate}
            >
              Create Playlist
            </li>
            <li
              className="p-2  hover:bg-newgray rounded-md cursor-pointer"
              onClick={deletePlaylist}
            >
              Delete playlist
            </li>
            <li
              className="p-2  hover:bg-newgray rounded-md cursor-pointer sm:hidden"
              onClick={handleEditPlaylist}
            >
              Edit Playlist
            </li>
            <li
              onClick={handleClose}
              className="flex p-2 justify-center text-lg hover:bg-newgray rounded-md cursor-pointer"
            >
              <IoCloseOutline />
            </li>
          </ul>
        </div>
      )}
      {showModal && (
        <EditTitle
          onClose={handleCloseEditModal}
          visible={showModal}
          playlist={playlist}
        />
      )}
    </div>
  );
};
