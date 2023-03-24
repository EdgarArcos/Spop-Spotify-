import { types } from "./types/types";

const musicReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_ALL_MUSIC:
      return {
        ...state,
        likelist: payload.data,
        photolist: payload.data[payload.randomIndex],
      };

    case types.CHANGE_PLAYON:
      return { ...state, playOn: !state.playOn };

    case types.HANDLE_INDEX:
      return { ...state, indexPlay: payload };

    case types.TOGGLE_RANDOM:
      return {
        ...state,
        random: !state.random,
      };
    case types.TOGGLE_REPEAT:
      return {
        ...state,
        repeat: !state.repeat,
      };

    default:
      state;
  }
};
export default musicReducer;
