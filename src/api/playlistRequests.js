import axios from "axios";

const API_URL = import.meta.env.VITE_APP_API_URL;

export const addPlaylistFetch = async (newList) => {
  return await axios.post(`${API_URL}/playlist/add`, newList);
};

export const getSongsFetch = async (data) => {
  return await axios
    .get(`${API_URL}/artist/`, data)
    .catch((res) => res.response.data.msg)
}

export const addSongPlaylistFetch = async(data) => {
    return await axios
    .post(`${API_URL}/playlist/:id/songs`, data
    .catch((res) => res.response.data.msg))
}

export const createplaylistFetch = async(data, userId) => {
    return await axios
    .post(`${API_URL}/playlist/add`, { ...data, user: userId })
    .then((res) => {
        return res.data;
    })
    .catch((res) => res.response.data.msg);
}