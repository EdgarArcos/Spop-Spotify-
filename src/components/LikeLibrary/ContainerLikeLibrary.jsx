import { useEffect, useState } from "react";
import { makeRequest } from "../../api/api-utils";
import React from 'react';
import { EachLikeSong } from "./EachLikeSong";
import cover from "../../assets/testimg/portada.jpg"
import { PlayButtonLibrary } from './PlayButtonLibrary';

export const ContainerLikeLibrary = () => {
    const [likelist, setlikelist] = useState([]);
    useEffect(() => {
        makeRequest("playlists").then((data) => setlikelist(data));
    }, []);

    return(

    <div className="min-h-screen h-full text-white">
        <div>
            <img className="rounded-b-3xl" src={cover} alt="cover" />
        </div>
        <div>
            <PlayButtonLibrary />
        </div>
        <div className="flex flex-col m-5">
            {likelist.map((song) => (
                <EachLikeSong key={song.id} song={song}/>
            ))}
        </div>
    </div>

)
};
