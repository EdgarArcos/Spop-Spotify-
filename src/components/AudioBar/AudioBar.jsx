import React from 'react'
import AudioPlayerDk from 'react-h5-audio-player';
import "react-h5-audio-player/lib/styles.css";
import "./AudioBar.css"


export const AudioBar = ({url, setPlayOn, playOn, setIndexPlay}) => {

    return (
        <div>
            <AudioPlayerDk src={url}
                            onEnded={()=>setIndexPlay((prev)=>prev+1)}
                            onPlay={()=>setPlayOn(!playOn)}
                            onPause={()=>setPlayOn(!playOn)} />
        </div>
    
    )
}

