import axios from "axios";

const API_URL = import.meta.env.VITE_APP_API_URL;

export const addPlaylistFetch = async (newList) => {
  return await axios.post(`${API_URL}/playlist/add`, newList);
};

export const getSongsFetch = async (data) => {
  return await axios
    .get(`${API_URL}/artist/`, data)
    .catch((res) => res.response.data.msg);
};
