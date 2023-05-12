import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getMusicRequest, makeRequest } from "../../api/api-utils";
import { MessageNotFound } from "./MessageNotFound";
import { ResultsOfSearch } from "./ResultsOfSearch";
import { SearchInputContainer } from "./SearchInputContainer";
import { useQuery } from "@tanstack/react-query";
import { ContainerGenres } from "./ContainerGenres";

const SearchResultsContainer = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchResults, setSearchResults] = useState([]);
  const query = searchParams.get("q") ?? "";

  const { isLoading, error, data } = useQuery({
    queryKey: ["genres"],
    queryFn: () => getMusicRequest("genres"),
  });
  console.log(data);

  return (
    <div className="sm:pl-[16rem]">
      <SearchInputContainer setSearchParams={setSearchParams} query={query} />
      <section>
        {query === "" ? (
          <ContainerGenres genresArr={!isLoading && data.data.genres} />
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
