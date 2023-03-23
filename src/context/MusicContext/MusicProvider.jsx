import { useEffect, useReducer } from "react"
import { makeRequest } from "../../api/api-utils"
import { MusicContext } from "./MusicContext"
import { types } from "./types/types"
import musicReducer from "./musicReducer"

const initialState = {likelist:[], photolist:[], indexPlay:0, playOn: false}

export const MusicProvider = ({children}) => {
    const [musicState, dispatch] = useReducer(musicReducer, initialState )
        useEffect(() => {
        const randomIndex = Math.floor(Math.random() * 20);

        makeRequest("tracks").then((data)=> dispatch({type:types.GET_ALL_MUSIC, payload:{data, randomIndex}}))  
    }, [])

    const handlePlayOn = ()=>{
        dispatch({type:types.CHANGE_PLAYON})
    }

    return (
    <MusicContext.Provider value={{musicState, handlePlayOn}}>{children}</MusicContext.Provider>
    )
}
