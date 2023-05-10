import React, { useContext, useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { useParams, useSearchParams } from "react-router-dom";
import { ResultsOfSearchSongs } from "./ResultsOfSearchSongs";
import { MessageNotFound } from "../SearchPage/MessageNotFound";
import { getSongsFetch } from "../../api/playlistRequests";
import { HeaderPlaylist } from "./HeaderPlaylist";
import { MusicContext } from "../../context/MusicContext/MusicContext";
import { MainCointainerPlaylist } from "./MainCointainerPlaylist";

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
        {musicState.playlist.map(playlist => playlist._id === id && (
          <React.Fragment key={id}>
            <HeaderPlaylist playlist={playlist} />
            <MainCointainerPlaylist playlist={playlist} />
          </React.Fragment>
        )
        )}
            <div>
              <p className="text-xl font-semibold">
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
                  <ResultsOfSearchSongs resultsArr={songs} playlistId={id} />
                ) : searchResults.length > 0 ? (
                  <ResultsOfSearchSongs resultsArr={searchResults} playlistId={id}/>
                ) : (
                  <MessageNotFound query={query} />
                ))}
            </section>
            
          </div>
        </div>
  );
};
