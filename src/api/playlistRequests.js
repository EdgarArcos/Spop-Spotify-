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

export const getPlaylisFetch = async(userId) => {
  return await axios
    .get(`${API_URL}/playlist/getplaylists`, {userId} )
    .catch((res) => res.response.data.msg)

}

export const addSongPlaylistFetch = async(data) => {
    return await axios
    .post(`${API_URL}/playlist/:id/songs`, data
    .catch((res) => res.response.data.msg))
}

export const createplaylistFetch = async(userId) => {
    return await axios
    .post(`${API_URL}/playlist/add`, {userId} )
    .catch((res) => res.response.data.msg);
}

export const editTitleFetch = async (playlistData) => {
  return await axios
    .put(`${API_URL}/playlist/edittitle`, playlistData)
    .catch((res) => res.response.data.msg);
};

export const editImgFetch = async (playlistData) => {
  return await axios
    .post(`${API_URL}/playlist/editimg`, playlistData)
    .catch((res) => res.response.data.msg);
};