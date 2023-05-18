import React, { useContext, useRef, useState } from 'react'
import { FiEdit2 } from "react-icons/fi";
import { editTitleFetch } from '../../api/playlistRequests';
import { IoCloseOutline } from 'react-icons/io5';
import { MusicContext } from '../../context/MusicContext/MusicContext';


export const EditTitle = ({visible, onClose, playlist}) => {

    const { handleEdit } = useContext(MusicContext);

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


    if (!visible) return null;
    const handleClose = () => {
        onClose();
    };
  return (
    <div  className="fixed inset-0 w-screen h-64 flex-row bg-black bg-opacity-70 flex justify-center items-center">
        <label className="flex flex-col text-xs relative">
        {isEditing ? (
          <input
            type="text"
            value={currentTitle}
            onChange={(e) => setCurrentTitle(e.target.value)}
            className="flex-row w-32 items-center  text-white text-xl font-bold bg-transparent"
            ref={inputRef}
            onBlur={saveInputChanges}
            onKeyDown={(e) => e.key === "Enter" && saveInputChanges()}
          />
        ) : (
          <div
            className="flex  flex-col justify-center items-center text-white text-xl font-bold bg-transparent cursor-pointer"
            onClick={startEdit}
          >
            {currentTitle || "Click to add a title"}
            <div onClick={handleClose} className="flex m-4 text-xl">
            <IoCloseOutline />
            </div>
          </div>
        )}
        {isEditing && (
            <div className="flex justify-center p-3">
          <FiEdit2
            className="cursor-pointer text-teal text-lg"
            onClick={startEdit}
          />
          </div>
        )}
    </label>
    </div>
  )
}
