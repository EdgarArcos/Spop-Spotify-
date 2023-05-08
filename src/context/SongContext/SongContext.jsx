import { useState, createContext, useContext } from 'react'
import { getSongsRequests, createSongRequest, deleteSongRequest, getSongRequest, updateSongRequest } from "../../api/apiSongs";

export const songContext = createContext()

export const useSongs = () => {
    const context = useContext(songContext)
    return context
}

export function SongProvider({ children }) {
    const [songs, setSongs] = useState([])

    const getSongs = async (user) => {
        const resultado = await getSongsRequests()
        let songs = []
        if (user?.email) {
            resultado.data.map((song) => { if (song.user === user.email) songs.push(song) })
        }
        return songs
    }

    const createSong = async (song) => {
        const res = await createSongRequest(song)
        setSongs([...songs, res.data])
    }

    const deleteSong = async (_id) => {
        const res = await deleteSongRequest(_id)
        setPosts(songs.filter(song => song._id !== _id))
    }

    const getSong = async (_id) => {
        const res = await getSongRequest(_id)
        return res.data
    }

    const updateSong = async (id, newSong) => {
        const res = await updateSongRequest(id, newSong)
        setSongs(posts.map((song) => (song._id === id ? newSong : song)))

    }


    return (
        <songContext.Provider value={{ setSongs, getSongs, createSong, deleteSong, getSong, updateSong }}>
            {children}
        </songContext.Provider>
    )
}