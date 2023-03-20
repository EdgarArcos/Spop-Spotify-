import { useEffect, useState } from "react";
import { makeRequest } from "../../api/api-utils";
import React from 'react';
import { EachLikeSong } from "./EachLikeSong";
import { PlayButtonLibrary } from './PlayButtonLibrary';
import { SideMenu } from "./SideMenu";
import { SlHeart } from "react-icons/sl"

export const ContainerLikeLibrary = () => {
    const [likelist, setlikelist] = useState([]);
    const [photolist, setPhotolist] = useState([]);
    

    useEffect(() => {

        makeRequest("playlists").then((data) => setlikelist(data));
    }, []);

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * 10);
        makeRequest("playlists").then((data) => setPhotolist(data[randomIndex]));
    }, []);

    return(

    <div className="min-h-screen h-full w-full text-white flex flex-col">
        <div className="h-screen fixed w-60 ">
        <SideMenu />
        </div>
        <div className="sm:pl-60">
            <div className="flex justify-center sm:justify-start bg-gradient-to-b from-cyan-700 to-zinc-800">
                <img className="rounded-b-3xl w-full sm:w-52 sm:rounded-2xl sm:m-4 sm:mt-32" src={photolist.thumbnail} alt="cover" />
            </div>
            <div className="bg-newblack sm:bg-gradient-to-b from-zinc-800 to-newblack pt-2">
                <div className="flex flex-row">
                    <PlayButtonLibrary />
                    <div className="hidden sm:flex m-4 items-center">
                    <SlHeart className="text-2xl" />
                    </div>    
                </div>
                <div className="flex flex-col m-5">
                    {likelist.map((song) => (
                        <EachLikeSong key={song.id} song={song}/>
                    ))}
                </div>
            </div>
        </div>
    </div>

)
};
