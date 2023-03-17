// import { useEffect, useState } from "react";
// import { makeRequest } from "../../api/api-utils";
// import { ContainerEachGenre } from "./ContainerEachGenre";
import React from 'react';

import cover from "../../assets/testimg/portada.jpg"
import song1  from "../../assets/testimg/song1.jpg";
import { PlayButtonLibrary } from './PlayButtonLibrary';

export const ContainerLikeLibrary = () => {
    return(
    <div className="min-h-screen h-full text-white">
    <div>
        <img className="rounded-b-3xl" src={cover} alt="cover" />
    </div>
    <div>
        <PlayButtonLibrary />
    </div>
    <div className="flex flex-col m-5">
        <div className="grid grid-rows-3 grid-flow-col gap-2">
            <img className="rounded-2xl row-span-3" src={song1} alt="song1" />
            <p className="col-span-1 mt-4 font-bold">Dreamhop Chill Lofi Beats</p>
            <p className="col-span-1 text-graytext font-bold">Playlist·Dreamhop music</p>
        </div>
    </div>
</div>
)
//   const [genres, setGenres] = useState([]);
//   useEffect(() => {
//     makeRequest("genres").then((data) => setGenres(data));
//   }, []);

//   return (
//     <div className="pb-4">
//       {genres.map(({ name }) => (
//         <ContainerEachGenre key={name} genre={name} />
//       ))}
//     </div>
//   );
};
