import { useEffect, useReducer } from "react";
import { MusicContext } from "./MusicContext";
import { types } from "./types/types";
import musicReducer from "./musicReducer";



const initialState = {
  playlist: [],
  currentList: [],
  indexPlay: 0,
  playOn: false,
  repeat: false,
  random: false,

};

export const MusicProvider = ({ children }) => {
  const [musicState, dispatch] = useReducer(musicReducer, initialState);

  const userMusic = (playlist) => {
    dispatch({ type: types.GET_ALL_MUSIC, payload: playlist });
  };

  const changeCurrentList = (songsArray) => {
    dispatch({ type: types.CHANGE_CURRENTLIST, payload: songsArray });
  };



  const activatePlayOn = () => {
    dispatch({ type: types.PLAY_ACTIVE });
  };

  const disablePlayOn = () => {
    dispatch({ type: types.PLAY_DISABLED });
  };

  const handleIndex = (index) => {
    dispatch({ type: types.HANDLE_INDEX, payload: index });
  };

  const handleRepeat = () => dispatch({ type: types.HANDLE_REPEAT });

  const handleRandom = () => dispatch({ type: types.HANDLE_RANDOM });

  const handleEnd = () => {
    if (musicState.random) {
      return handleIndex(Math.random() * musicState.currentList.length);
    } else {
      if (state.repeat) {
        nextSong();
      } else if (state.indexPlay === state.currentList.length - 1) {
        return;
      } else {
        nextSong();
      }
    }
  };

  const handleAddPlaylist = (newPlaylist) => {
    dispatch({
      type: "ADD_PLAYLIST",
      payload: newPlaylist,
    });
  };

  const handleEdit = (newTitle, playlistId) => {
    const newPlaylist = musicState.playlist.map((list) => {
      return list._id === playlistId ? { ...list, title: newTitle } : list;
    });
    dispatch({
      type: "EDIT_PLAYLIST_TITLE",
      payload: newPlaylist,
    });
  };

  const handleEditImg = (newImg, playlistId) => {
    const newPlaylist = musicState.playlist.map((list) => {
      return list._id === playlistId ? { ...list, img: newImg } : list;
    });
    console.log(newPlaylist);
    dispatch({
      type: "EDIT_PLAYLIST_IMG",
      payload: newPlaylist,
    });
  };

  const handleLikedSongs = (likedSongs) => {
    const newPlayList = musicState.playlist.map((list) => {
      return list._id === likedSongs._id ? likedSongs : list;
    });
    dispatch({ type: types.HANDLE_LIKELIST, payload: newPlayList });
  };

  const handleAddSong = (playlistSongs) => {
    const playlistArr = musicState.playlist.map((list) => {
      return list._id === playlistSongs._id ? playlistSongs : list;
    });
    dispatch({ type: types.HANDLE_PLAYLIST, payload: playlistArr});
  }

  const handleDeleteSong = (playlistSongs) => {
    const playlistArr = musicState.playlist.map((list) => {
      return list._id === playlistSongs._id ? playlistSongs : list;
    });
    dispatch({ type: types.DELETE_SONG, payload: playlistArr });
  }

  const handleDeletePlaylist = (playlistId) => {
    const newResult = musicState.playlist.filter((list) => {
        return list._id !== playlistId;
      });
    dispatch({ type: types.DELETE_PLAYLIST, payload: newResult });
  }

  return (
    <MusicContext.Provider
      value={{
        musicState,
        handleIndex,
        handleRepeat,
        handleRandom,
        handleAddPlaylist,
        userMusic,
        handleEdit,
        handleEditImg,
        handleLikedSongs,
        handleAddSong,
        changeCurrentList,
        handleDeleteSong,
        handleDeletePlaylist,
        activatePlayOn,
        disablePlayOn,
        handleEnd
      }}
    >
      {children}
    </MusicContext.Provider>
  );
};
