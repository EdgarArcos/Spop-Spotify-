import React, { useContext, useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { useParams, useSearchParams } from "react-router-dom";
import { ResultsOfSearchSongs } from "./ResultsOfSearchSongs";
import { MessageNotFound } from "../SearchPage/MessageNotFound";
import { getSongsFetch } from "../../api/playlistRequests";
import { HeaderPlaylist } from "./HeaderPlaylist";
import { MusicContext } from "../../context/MusicContext/MusicContext";

export const CreateList = () => {



  const {id} = useParams();
  const {musicState} = useContext(MusicContext)

  const [songs, setSongs] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchResults, setSearchResults] = useState([]);
  

  const query = searchParams.get("q") ?? "";

    const handleSearch = ({ target }) => {
    const { value } = target;
    setSearchParams({ q: value });
    setShowResults(value !== "");
};

  useEffect(() => {
    getSongsFetch("songs").then((data) => {
      setSongs(data.data);
    });
  }, []);

  useEffect(() => {
    if (songs.length > 0) {
      const resultsArr = songs.filter(({ name }) => {
        return name?.toLowerCase().includes(query.toLowerCase());
      });
      setSearchResults(resultsArr);
    }
  }, [songs, query]);

  return (
    
    <div className="min-h-screen h-full w-full text-white flex flex-col">     
      <div className=" bg-newblack sm:pl-60">
        {musicState.playlist.map(playlist => playlist._id === id && <HeaderPlaylist key={id} playlist={playlist}/>)}
      
        
        <div className="bg-newblack sm:bg-gradient-to-b from-zinc-900 to-newblack pt-2">
          <div className="flex flex-col m-5">
            <table className="w-full mt-4">
              <thead>
                <tr className="hidden sm:grid sm:grid-cols-2 md:grid md:grid-cols-3 lg:grid lg:grid-cols-4  text-graytext text-lg border-b  border-graytext mb-8 ">
                  <th>#</th>
                  <th>Title</th>
                  <th className="hidden md:grid">Artist</th>
                  <th className="hidden lg:grid"></th>
                </tr>
              </thead>
            </table>
            <div>
              <p className="text-lg sm:text-xl font-semibold">
                Let's find something for your list
              </p>
              <label className="flex relative mt-4 md:w-11/12 lg:w-9/12 xl:w-8/12 2xl:w-7/12">
                <BiSearch className="absolute top-5 left-5 text-2xl" />
                <input
                  type="text"
                  placeholder="Search.."
                  name="search"
                  value={query}
                  onChange={handleSearch}
                  className="rounded-3xl bg-newgray text-lg w-80 h-11 m-2 pl-11 pr-3"
                />
              </label>
            </div>

            <section>
              {showResults &&
                (query === "" ? (
                  <ResultsOfSearchSongs resultsArr={songs} />
                ) : searchResults.length > 0 ? (
                  <ResultsOfSearchSongs resultsArr={searchResults} />
                ) : (
                  <MessageNotFound query={query} />
                ))}
            </section>
            
          </div>
        </div>
      </div>
    </div>
  );
};
