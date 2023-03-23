import { useState, useContext } from "react";
import React from "react";
import { EachLikeSong } from "./EachLikeSong";
import { PlayButtonLibrary } from "./PlayButtonLibrary";
import { SideMenu } from "../Reusable";
import { SlHeart } from "react-icons/sl";
import { BiTime } from "react-icons/bi";
import { AudioBar } from "../AudioBar/AudioBar";
import { MusicContext } from "../../context/MusicContext/MusicContext";

export const ContainerLikeLibrary = () => {
  const { musicState } = useContext(MusicContext);
  const { likelist, photolist, playOn } = musicState;
  const [indexPlay, setIndexPlay] = useState(0);

  return (
    <div className="min-h-screen h-full w-full text-white flex flex-col">
      <div className="h-screen fixed w-60 ">
        <SideMenu />
      </div>
      <div className=" bg-newblack sm:pl-60">
        <div className="flex justify-center sm:justify-start sm:bg-gradient-to-b from-cyan-700 to-zinc-800 smborder-b border-graytext">
          <img
            className="w-full rounded-b-3xl sm:w-52 sm:rounded-2xl sm:m-4 sm:mt-32"
            src={photolist.thumbnail}
            alt="cover"
          />
          <h1 className="hidden sm:flex items-center m-4 mt-32 text-white text-5xl font-bold">
            Liked Songs
          </h1>
        </div>
        <div className="bg-newblack sm:bg-gradient-to-b from-zinc-800 to-newblack pt-2">
          <div className="flex flex-row">
            <PlayButtonLibrary setIndexPlay={setIndexPlay} />
            <div className="hidden sm:flex m-4 items-center">
              <SlHeart className="text-2xl" />
            </div>
          </div>
          <div className="flex flex-col m-5">
            <table className="w-full">
              <thead>
                <tr className="hidden sm:grid sm:grid-cols-2 md:grid md:grid-cols-3 lg:grid lg:grid-cols-4  text-graytext text-lg border-b  border-graytext mb-8 ">
                  <th>#</th>
                  <th>Title</th>
                  <th className="hidden md:grid">Artist</th>
                  <th className="hidden lg:grid">
                    <BiTime />
                  </th>
                </tr>
              </thead>
              {likelist.map((song, index) => (
                <EachLikeSong
                  key={song.id}
                  index={index}
                  song={song}
                  setIndexPlay={setIndexPlay}
                />
              ))}
            </table>
          </div>
        </div>
        <div></div>
        <div className="fixed bottom-3 p-3 w-full sm:w-11/12">
          <AudioBar
            url={playOn ? likelist[indexPlay].url : ""}
            setIndexPlay={setIndexPlay}
          />
        </div>
      </div>
    </div>
  );
};
