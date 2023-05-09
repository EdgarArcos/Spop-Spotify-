import React, { useContext, useRef, useState } from "react";
import { FiEdit2 } from "react-icons/fi";
import { editImgFetch, editTitleFetch } from "../../api/playlistRequests";
import { MusicContext } from "../../context/MusicContext/MusicContext";
import { useParams } from "react-router-dom";

export const HeaderPlaylist = ({ playlist }) => {
  const { musicState, handleEditImg, handleEdit } = useContext(MusicContext);

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
    console.log(playlist._id);
    data.append("file", e.target.files[0]);
    data.append("playlistId", playlist._id);

    const res = await editImgFetch(data);

    if (res.data.ok) handleEditImg(res.data.img, playlist._id);
  };

  return (
    <div className="flex justify-center sm:justify-start sm:bg-gradient-to-b from-zinc-500 to-zinc-900 smborder-b border-graytext">
      <div>
      <label className="cursor-pointer text-[0.6rem] flex flex-col items-center justify-center hover:text-teal">
      <img
        className="w-full rounded-b-3xl sm:w-52 sm:rounded-2xl sm:m-4 sm:mt-32"
        src={playlist.img}
        alt="cover"
      />
      <input type="file" className="hidden" onChange={(e) => editImage(e, playlist.id)} />
      </label>
      </div>

      <label className="w-10/12 text-xs relative lg:w-5/12 xl:w-[45%]">
        {isEditing ? (
          <input
            type="text"
            value={currentTitle}
            onChange={(e) => setCurrentTitle(e.target.value)}
            className="flex items-center w-96 m-4 mt-48 text-white text-7xl font-bold bg-transparent"
            ref={inputRef}
            onBlur={saveInputChanges}
            onKeyDown={(e) => e.key === "Enter" && saveInputChanges()}
          />
        ) : (
          <div
            className="hidden sm:flex items-center m-4 mt-48 text-white text-7xl font-bold bg-transparent cursor-pointer"
            onClick={startEdit}
          >
            {currentTitle || "Click to add a title"}
          </div>
        )}
        {isEditing && (
          <FiEdit2
            className="hidden sm:cursor-pointer text-teal text-lg"
            onClick={startEdit}
          />
        )}
      </label>
    </div>
  );
};

{
  /* <h1 className="hidden sm:flex items-center m-4 mt-32 text-white text-7xl font-bold">
          {playlist.title}
          </h1> */
}
