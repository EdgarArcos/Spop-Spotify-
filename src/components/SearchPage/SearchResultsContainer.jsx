import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { makeRequest } from "../../api/api-utils";
import { MessageNotFound } from "./MessageNotFound";
import { ResultsOfSearch } from "./ResultsOfSearch";
import { SearchInputContainer } from "./SearchInputContainer";

const SearchResultsContainer = () => {
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

  return (
    <div className="sm:pl-[16rem]">
      <SearchInputContainer setSearchParams={setSearchParams} query={query} />
      <section>
        {query === "" ? (
          <ResultsOfSearch resultsArr={allData} />
        ) : searchResults.length > 0 ? (
          <ResultsOfSearch resultsArr={searchResults} />
        ) : (
          <MessageNotFound query={query} />
        )}
      </section>
    </div>
  );
};

export default SearchResultsContainer;