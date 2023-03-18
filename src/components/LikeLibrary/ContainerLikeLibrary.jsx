import { useEffect, useState } from "react";
import { makeRequest } from "../../api/api-utils";
import React from 'react';
import { EachLikeSong } from "./EachLikeSong";
import { PlayButtonLibrary } from './PlayButtonLibrary';

export const ContainerLikeLibrary = () => {
    const [likelist, setlikelist] = useState([]);
    const [photolist, setPhotolist] = useState([]);
    

    useEffect(() => {

        makeRequest("playlists").then((data) => setlikelist(data));
    }, []);

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * 11);
        makeRequest("playlists").then((data) => setPhotolist(data[randomIndex]));
    }, []);

    return(

    <div className="min-h-screen h-full text-white flex flex-col">
        <div className="flex justify-center">
            <img className="rounded-b-3xl w-full" src={photolist.thumbnail} alt="cover" />
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
