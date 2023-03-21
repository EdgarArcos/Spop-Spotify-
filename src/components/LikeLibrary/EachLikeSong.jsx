import React from 'react'


export const EachLikeSong = ({ song }) => {
    const { thumbnail, name, artist } = song;
    return (
            <tbody>
                <tr className="flex hover:bg-newgray rounded-md cursor-pointer sm:grid sm:grid-cols-2 md:grid md:grid-cols-3 lg:grid lg:grid-cols-4 gap-4 sm:justify-center m-3">
                    <td className="hidden sm:grid justify-center pt-6">
                        <p>Num</p>
                    </td>
                    <td className="flex sm:grid sm:grid-cols-2">
                        <div className="flex sm:hidden">
                        <img className="rounded-2xl w-20 max-w-none" src={thumbnail} alt={name} />
                            <div className="flex-row ml-3 items-center">
                                <p className="font-bold">{name}</p>
                                <p className="text-graytext font-bold">Playlist · {artist} </p>
                                </div>
                        </div>
                        <img className="hidden sm:grid sm:col-span-1 rounded-2xl w-20 max-w-none" src={thumbnail} alt={name} />
                        <p className="hidden sm:grid sm:col-span-1 pt-6 ">{name}</p>
                    </td>
                    <td className="hidden md:grid  pt-6 justify-start pl-14 font-bold text-graytext" >Playlist · {artist}</td>
                    <td className="hidden lg:grid  pt-6 justify-start">Time</td>
                </tr>
            </tbody>
    // <ol className="list-outside flex"> 
    //     <li className="list-none sm:list-decimal m-2 hover:bg-newgray rounded-md cursor-pointer">
    //         <div className="flex">
    //         <img className="rounded-2xl w-20 max-w-none sm:flex" src={thumbnail} alt={name} />
    //         <div className="flex-row ml-3 items-center">
    //             <p className="font-bold sm:flex">{name}</p>
    //             <p className="text-graytext font-bold sm:flex">Playlist · username </p>
    //         </div>
    //         </div>
    //     </li>
    // </ol>
    )
}
