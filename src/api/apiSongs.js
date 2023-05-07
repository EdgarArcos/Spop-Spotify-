import axios from "axios";

export const getSongsRequests = async () => await axios.get('http://localhost:4000/artist/')
export const createSongRequest = async (song) => {
    const form = new FormData();
    for (let key in song) {
        form.append(key, song[key]);
    }
    return await axios.post('http://localhost:4000/artist/', form, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    })
}
export const deleteSongRequest = async _id => await axios.delete('http://localhost:4000/artist/' + _id)
export const getSongRequest = async _id => await axios.get('http://localhost:4000/artist/' + _id)
export const updateSongRequest = async (_id, newPost) => { await axios.put(`http://localhost:4000/artist/` + _id, newPost) }