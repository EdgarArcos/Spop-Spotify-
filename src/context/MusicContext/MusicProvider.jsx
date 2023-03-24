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
    dispatch({ type: types.HANDLE_INDEX, payload: index });
  };



  const toggleRepeat = () =>
    dispatch({ type: types.TOGGLE_REPEAT});

  const toggleRandom = () => dispatch({ type: types.TOGGLE_RANDOM });

  const handleEnd = () => {
    if (state.random) {
      return handleIndex(~~(Math.random() * state.likelist.length));
    } else {
      if (state.repeat) {
        nextSong();
      } else if (state.indexPlay === state.likelist.length - 1) {
        return;
      } else {
        nextSong();
      }
    }
  };

  return (
    <MusicContext.Provider
      value={{
        musicState,
        handlePlayOn,
        handleIndex,
        toggleRepeat,
        toggleRandom,
        handleEnd,
      }}
    >
      {children}
    </MusicContext.Provider>
  );
};
