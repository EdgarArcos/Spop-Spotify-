import { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { useSearchParams } from "react-router-dom";
import { makeRequest } from "../../api/api-utils";
import { SongCard } from "../Reusable/SongCard";

export const SearchResultsContainer = () => {
  const [allData, setAllData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchResults, setSearchResults] = useState([]);
  const query = searchParams.get("q") ?? "";

  useEffect(() => {
    makeRequest("tracks").then((data) => setAllData(data));
  }, []);

  useEffect(() => {
    const resultsArr = allData.filter(({ name }) => {
      return name.toLowerCase().includes(query.toLowerCase());
    });
    setSearchResults(resultsArr);
  }, [allData, query]);

  const handleSearch = ({ target }) => {
    const { value } = target;
    setSearchParams({ q: value });
  };

  return (
    <div className="sm:pl-[16rem]">
      <section className="flex flex-col w-full px-2 sm:pt-12 sm:pb-3 sm:px-10">
        <h2 className="text-3xl m-2 mt-8">Search</h2>
        <label className="flex relative align-middle justify-center mb-2 md:w-11/12 lg:w-9/12 xl:w-8/12 2xl:w-7/12">
          <BiSearch className="absolute top-5 left-5 text-2xl" />
          <input
            type="search"
            value={query}
            onChange={handleSearch}
            className="rounded-3xl bg-newgray text-lg w-full h-11 m-2 pl-11 pr-3"
          />
        </label>
      </section>
      <section>
        {query === "" ? (
          <div className="grid grid-cols-2 place-items-center gap-y-4 p-5 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7">
            {allData.map(({ id, name, url, thumbnail }) => (
              <SongCard
                key={id}
                id={id}
                name={name}
                url={url}
                thumbnail={thumbnail}
              />
            ))}
          </div>
        ) : searchResults.length > 0 ? (
          <div className="grid grid-cols-2 place-items-center gap-y-4 p-5 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7">
            {searchResults.map(({ id, name, url, thumbnail }) => (
              <SongCard
                key={id}
                id={id}
                name={name}
                url={url}
                thumbnail={thumbnail}
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col text-center p-20 md:text-left md:px-14 md:py-3">
            <h2 className="text-xl mb-5">Could not be found "{query}"</h2>
            <p className="text-sm">
              re-search with a different keyword or otherwise typed
            </p>
          </div>
        )}
      </section>
    </div>
  );
};
