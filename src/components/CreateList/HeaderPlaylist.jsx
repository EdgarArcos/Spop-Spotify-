import React, { useContext, useRef, useState } from 'react'
import { FiEdit2 } from "react-icons/fi";
import { editImgFetch, editTitleFetch } from '../../api/playlistRequests';
import { MusicContext } from '../../context/MusicContext/MusicContext';
import { useParams } from 'react-router-dom';

export const HeaderPlaylist = ({playlist}) => {

    
    const {musicState, handleEditImg, handleEdit} = useContext(MusicContext);

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

      const editImage = async(e) => { 
        const data = new FormData();
        
        data.append("file", e.target.files[0]);
        data.append("playlistId", playlist && playlist._id)
        
        const res = await editImgFetch(data);
        console.log(res)
        if(res.data.ok) handleEditImg(data, playlist._id) 
        
      };


  return (
    <div className="flex justify-center sm:justify-start sm:bg-gradient-to-b from-zinc-500 to-zinc-900 smborder-b border-graytext">
          <img
            className="w-full rounded-b-3xl sm:w-52 sm:rounded-2xl sm:m-4 sm:mt-32"
            src={playlist.img}
            alt="cover"
          />
          <label className="flex flex-col w-10/12 text-xs relative border-b lg:w-5/12 xl:w-[45%]">
          <input type="file" onChange={(e) => editImage(e, playlist.id)} />
      
      <input
        type="text"
        value={currentTitle}
        onChange={(e) => setCurrentTitle(e.target.value)}
        className="flex items-center m-4 mt-32 text-white text-7xl font-bold bg-transparent"
        ref={inputRef}
        disabled={!isEditing}
        onBlur={saveInputChanges}
        onKeyDown={(e) => e.key === "Enter" && saveInputChanges()}
      />
      <FiEdit2
        className="absolute right-0 cursor-pointer hover:text-teal"
        onClick={startEdit}
      />
    </label>
        </div>
  )
}


{/* <h1 className="hidden sm:flex items-center m-4 mt-32 text-white text-7xl font-bold">
          {playlist.title}
          </h1> */}