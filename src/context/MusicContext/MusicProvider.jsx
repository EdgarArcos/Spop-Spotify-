import { useEffect, useReducer } from "react";
import { makeRequest } from "../../api/api-utils";
import { MusicContext } from "./MusicContext";
import { types } from "./types/types";
import musicReducer from "./musicReducer";

const initialState = {
  likelist: [],
  photolist: [],
  indexPlay: 0,
  playOn: false,
  repeat: false,
  random: false,
  // playing: false,
};

export const MusicProvider = ({ children }) => {
  const [musicState, dispatch] = useReducer(musicReducer, initialState);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * 20);
    makeRequest("tracks").then((data) =>
      dispatch({ type: types.GET_ALL_MUSIC, payload: { data, randomIndex } })
    );
  }, []);

  const handlePlayOn = () => {
    dispatch({ type: types.CHANGE_PLAYON });
  };

  const handleIndex = (index) => {
    dispatch({ type: types.HANDLE_INDEX, payload: index})
  }

  // const togglePlaying = () =>
  //   dispatch({ type: types.TOGGLE_PLAYING, payload: state.playing ? false : true })

  const prevSong = () => {
    if (state.random) {
      return handleIndex((Math.random() * state.likelist.length))
      }
  
    if (state.indexPlay === 0) {
      return handleIndex(state.likelist.length - 1)
      } else {
      return handleIndex(state.indexPlay - 1)
      }
    }
    
    const nextSong = () => {
      if (state.random) {
        return handleIndex((Math.random() * state.likelist.length))
      }
      if (state.indexPlay === state.likelist.length - 1) {
        handleIndex(0)
      } else {
        handleIndex(state.indexPlay + 1)
      }
    }
  
    const toggleRepeat = (index) =>
      dispatch({ type: types.TOGGLE_REPEAT, data: state.repeat ? false : true })
    const toggleRandom = (index) =>
      dispatch({ type: types.TOGGLE_RANDOM, data: state.random ? false : true })
  
    
    const handleEnd = () => {
      if (state.random) {
        return handleIndex(~~(Math.random() * state.likelist.length))
      } else {
        if (state.repeat) {
          nextSong()
        } else if (state.indexPlay === state.likelist.length - 1) {
          return
        } else {
          nextSong()
        }
      }
    }

  

  return (
    <MusicContext.Provider value={{ musicState, handlePlayOn, handleIndex,  prevSong, nextSong, toggleRepeat, toggleRandom, handleEnd  }}>
      {children}
    </MusicContext.Provider>
  );
};
