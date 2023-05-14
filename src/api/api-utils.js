import axios from "axios";

const API_URL = import.meta.env.VITE_APP_API_URL;

export const searchRequest = async (query) => {
  return await axios
    .get(`${API_URL}/search/${query}`)
    .catch((res) => res.response.data.msg);
};

export const searchPlaylistById = async (playlistId) => {
  return await axios
    .get(`${API_URL}/search/playlist/${playlistId}`)
    .catch((res) => res.response.data.msg);
};

export const getMusicRequest = async (endPoint) => {
  return await axios
    .get(`${API_URL}/music/${endPoint}`)
    .catch((res) => res.response.data.msg);
};

export const handleLikeSong = async (likeInfo) => {
  return await axios
    .post(`${API_URL}/music/handlelikesong`, likeInfo)
    .catch((res) => res.response.data.msg);
};
