import axios from "axios";

const API_URL = "http://localhost:4000";


export const addPlaylistFetch = async () => {
    return await axios.post(`${API_URL}/playlist/add`, newList);
};
