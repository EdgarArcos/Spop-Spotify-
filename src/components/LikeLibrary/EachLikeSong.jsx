import React from 'react'


export const EachLikeSong = ({ song }) => {
    const { thumbnail, name } = song;
    return (
    <div> 
        <div className="grid grid-flow-col gap-2 m-2 justify-start">
            <img className="rounded-2xl row-span-3 w-20 max-w-none" src={thumbnail} alt={name} />
            <p className="row-span-1 font-bold">{name}</p>
            <p className="row-span-1 text-graytext font-bold">Playlist· username </p>
        </div>
    </div>
    )
}
