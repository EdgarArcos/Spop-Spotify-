import { types } from "./types/types";

const musicReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_ALL_MUSIC:
      return {
        ...state,
        playlist: payload
        // // likelist: payload.data,
        // photolist: payload.data[payload.randomIndex],
      };

    case types.CHANGE_PLAYON:
      return { ...state, playOn: !state.playOn };

    case types.HANDLE_INDEX:
      return { ...state, indexPlay: payload };

    case types.HANDLE_RANDOM:
      return {
        ...state,
        random: !state.random,
      };
    case types.HANDLE_REPEAT:
      return {
        ...state,
        repeat: !state.repeat,
      };

    case types.ADD_PLAYLIST:
      return {
        ...state,
        playlist: [...state.playlist, payload]
      };

      case types.EDIT_PLAYLIST_TITLE:
      return {
        ...state,
        playlist: { ...state.playlist, title: payload }
      };

      case types.EDIT_IMG:
      return {
        ...state,
        playlist: { ...state.playlist, img: payload },
      };

    default:
      state;
  }
};
export default musicReducer;
