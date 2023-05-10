import axios from "axios";

const API_URL = import.meta.env.VITE_APP_API_URL;

export const makeRequest = async (endPoint) => {
  try {
    const { data } = await axios.get(`http://localhost:3000/${endPoint}`);
    return data;
  } catch (error) {
    console.error(error);
  }
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
