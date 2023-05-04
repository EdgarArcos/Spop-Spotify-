import axios from "axios";

const API_URL = "http://localhost:4000";


export const addPlaylistFetch = async (newList) => {
    return await axios.post(`${API_URL}/playlist/add`, newList);
};

export const getSongsFetch = async (data) => {
    return await axios
    .get(`${API_URL}/artist/`, data)
    .catch((res) => res.response.data.msg)
}

