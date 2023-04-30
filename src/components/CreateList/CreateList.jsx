import React from 'react'
import cover from "../../assets/testimg/Sense títol.png";
import {BiSearch} from "react-icons/bi";

export const CreateList = () => {
    return (
        <div className="min-h-screen h-full w-full text-white flex flex-col">
            <div className=" bg-newblack sm:pl-60">
            <div className="flex justify-center sm:justify-start sm:bg-gradient-to-b from-zinc-500 to-zinc-900 smborder-b border-graytext">
                <img
                className="w-full rounded-b-3xl sm:w-52 sm:rounded-2xl sm:m-4 sm:mt-32"
                src={cover}
                alt="cover"
                />
                <h1 className="hidden sm:flex items-center m-4 mt-32 text-white text-7xl font-bold">
                My Playlist
                </h1>
            </div>
            <div className="bg-newblack sm:bg-gradient-to-b from-zinc-900 to-newblack pt-2">
                <div className="flex flex-col m-5">
                <table className="w-full mt-4">
                    <thead>
                    <tr className="hidden sm:grid sm:grid-cols-2 md:grid md:grid-cols-3 lg:grid lg:grid-cols-4  text-graytext text-lg border-b  border-graytext mb-8 ">
                        {/* <th></th>
                        <th>Title</th>
                        <th className="hidden md:grid">Artist</th>
                      <th className="hidden lg:grid"> */}
                        
                      {/* </th> */}
                    </tr>
                    </thead>
                    
                    <div>
                        <p className="text-xl font-semibold">Let's find something for your list</p>
                        <label className="flex relative mt-4 md:w-11/12 lg:w-9/12 xl:w-8/12 2xl:w-7/12">
                            <BiSearch className="absolute top-5 left-5 text-2xl" />
                            <input type="text" placeholder="Search.." name="search" className="rounded-3xl bg-newgray text-lg w-80 h-11 m-2 pl-11 pr-3" />                        
                        </label>
                    </div>


                    </table>
                </div>
            </div>
            </div>
        </div>
        );
}
