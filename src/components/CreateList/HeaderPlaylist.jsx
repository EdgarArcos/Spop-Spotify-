import React, { useContext, useRef, useState } from 'react';
import { FiEdit2 } from 'react-icons/fi';
import { editImgFetch, editTitleFetch } from '../../api/playlistRequests';
import { MusicContext } from '../../context/MusicContext/MusicContext';
import { MyMenuModal } from '../Reusable/MyMenuModal';
import { PlayButtonLibrary } from '../LikeLibrary/PlayButtonLibrary';
import { useScreenWidth } from '../../hooks/useScreenWidth';

export const HeaderPlaylist = ({ playlist }) => {
  const { musicState, handleEditImg, handleEdit } = useContext(MusicContext);
  const screenWidth = useScreenWidth();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentTitle, setCurrentTitle] = useState(playlist.title);
  const [isEditing, setIsEditing] = useState(false);
  const inputRef = useRef();

  const startEdit = () => {
    setIsEditing(true);
    setTimeout(() => {
      inputRef.current.focus();
    }, 1);
  };

  const saveInputChanges = async () => {
    setIsEditing(false);
    const res = await editTitleFetch({
      newTitle: currentTitle,
      playlistId: playlist._id,
    });
    if (res.data.ok) handleEdit(currentTitle, playlist._id);
  };

  const editImage = async (e) => {
    const data = new FormData();
    data.append('file', e.target.files[0]);
    data.append('playlistId', playlist._id);

    const res = await editImgFetch(data);

    if (res.data.ok) handleEditImg(res.data.img, playlist._id);
  };

  const handleOnClose = () => setIsModalOpen(false);

  return (
    <div>
      {screenWidth < 640 ? (
        <div className=" text-white flex flex-col">
          <div className="bg-newblack">
            <div>
              <label className="cursor-pointer text-[0.6rem] flex flex-col items-center justify-center hover:text-teal">
                <img
                  className="w-full h-80 rounded-b-3xl"
                  src={playlist.img}
                  alt="cover"
                />
                <input
                  type="file"
                  className="hidden"
                  onChange={(e) => editImage(e, playlist.id)}
                />
              </label>
            </div>
            <div className="flex flex-row">
              <PlayButtonLibrary playlist={playlist} />
              <div className="flex m-4 items-center relative">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="mb-4 text-4xl"
                >
                  ...
                </button>
                <MyMenuModal
                  onClose={handleOnClose}
                  visible={isModalOpen}
                  playlist={playlist}
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-start bg-gradient-to-b from-zinc-500 to-zinc-900  border-graytext">
          <div>
            <label className="cursor-pointer text-[0.6rem] flex flex-col items-center justify-center hover:text-teal">
              <img
                className="w-52 h-52 rounded-2xl m-4 mt-32"
                src={playlist.img}
                alt="cover"
              />
              <input
                type="file"
                className="hidden"
                onChange={(e) => editImage(e, playlist.id)}
              />
            </label>
            <div className="flex flex-row">
              <PlayButtonLibrary playlist={playlist} />
              <div className="flex m-4 items-center relative">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="mb-4 text-4xl"
                >
                  ...
                </button>
                <MyMenuModal
                  onClose={handleOnClose}
                  visible={isModalOpen}
                  playlist={playlist}
                />
              </div>
            </div>
          </div>

          <label className="w-10/12 text-xs relative lg:w-5/12 xl:w-[45%]">
            {isEditing ? (
              <input
                type="text"
                value={currentTitle}
                onChange={(e) => setCurrentTitle(e.target.value)}
                className="flex-row items-center w-1/2 m-4 mt-48 text-white text-7xl font-bold bg-transparent"
                ref={inputRef}
                onBlur={saveInputChanges}
                onKeyDown={(e) => e.key === 'Enter' && saveInputChanges()}
              />
            ) : (
              <div
                className="flex items-center m-4 mt-48 text-white text-7xl font-bold bg-transparent cursor-pointer"
                onClick={startEdit}
              >
                {currentTitle || 'Click to add a title'}
              </div>
            )}
            {isEditing && (
              <FiEdit2
                className="cursor-pointer text-teal text-lg"
                onClick={startEdit}
              />
            )}
          </label>
        </div>
      )}
    </div>
  );
};
