import React from 'react'
export default function Cardsongs({ song }) {
    return (
        <div className="text-white">
            <div className=" rounded-2xl bg-zinc-800 hover:bg-zinc-700 hover:cursor-pointer ">
                <div className=" px-12 py-5">
                    <div className=" my-1 text-end">
                        <button className="ml-5 bg-orange-600 text-sm px-4 py-2 rounded-sm hover:bg-orange-500" onClick={() => verifyHandleEdit()}>Edit</button>
                        <button onClick={() => verifyHandleDelete(post._id, post.title)} className="bg-red-600 text-sm px-4 py-2 ml-5 rounded-sm hover:bg-red-500">Delete</button>
                    </div>
                    <div className="text-center">
                        <h2 className=" break-all text-xl uppercase">{song.name}</h2>
                    </div>
                    <div className="inline ">
                        <p className="m-1 break-all">{song.artist}</p>
                    </div>
                    <div className="mt-6">
                        {song.image && <img className="rounded-xl h-auto max-w-full" src={song.image.url} />}
                    </div>
                    <div className="mt-6">
                        {song.song && <button src={song.song.url}>Play</button>}
                    </div>
                </div>
            </div>
        </div>
    )
}
