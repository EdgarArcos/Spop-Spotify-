import axios from 'axios';

const API_URL = import.meta.env.VITE_APP_API_URL;

export const getSongsRequests = async () =>
  await axios.get('http://localhost:4000/artist/');
export const createSongRequest = async (song) => {
  const form = new FormData();
  for (let key in song) {
    form.append(key, song[key]);
  }
  return await axios.post(`${API_URL}/artist/`, form, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};
export const deleteSongRequest = async (_id) =>
  await axios.delete(`${API_URL}/artist/` + _id);
export const getSongRequest = async (_id) =>
  await axios.get(`${API_URL}/artist/` + _id);
export const updateSongRequest = async (_id, newPost) => {
  await axios.put(`${API_URL}/artist/` + _id, newPost);
};
