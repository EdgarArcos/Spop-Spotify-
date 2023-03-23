import { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { useSearchParams } from "react-router-dom";
import { makeRequest } from "../../api/api-utils";
import { SongCard } from "../HomePage/SongCard";

export const SearchResultsContainer = () => {
  const [allData, setAllData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchResults, setSearchResults] = useState(allData);
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
      <section>
        <h2>Search</h2>
        <label>
          <BiSearch />
          <input
            type="search"
            value={query}
            onChange={handleSearch}
            className="text-black"
          />
        </label>
      </section>
      <section>
        {searchResults.length > 0 ? (
          searchResults.map(({ id, name, url, thumbnail }) => (
            <SongCard
              key={id}
              id={id}
              name={name}
              url={url}
              thumbnail={thumbnail}
            />
          ))
        ) : (
          <div>
            <h2>Could not be found "{query}"</h2>
            <p>re-search with a different keyword or otherwise typed</p>
          </div>
        )}
      </section>
    </div>
  );
};
