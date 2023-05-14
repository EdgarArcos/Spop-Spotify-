import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getMusicRequest, searchRequest } from "../../api/api-utils";
import { MessageNotFound } from "./MessageNotFound";
import { ResultsOfSearch } from "./ResultsOfSearch";
import { SearchInputContainer } from "./SearchInputContainer";
import { useQuery } from "@tanstack/react-query";
import { ContainerGenres } from "./ContainerGenres";

const SearchResultsContainer = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [userResults, setUserResults] = useState([]);
  const [songResults, setSongResults] = useState([]);
  const [playlistResults, setPlaylistResults] = useState([]);
  const query = searchParams.get("q") ?? "";

  const { isLoading, error, data } = useQuery({
    queryKey: ["genres"],
    queryFn: () => getMusicRequest("genres"),
  });

  const makeSearchRequest = async () => {
    const res = await searchRequest(query);
    if (res.data.ok) {
      setSongResults(res.data.searchResults.songsByName);
      setUserResults(res.data.searchResults.users);
      setPlaylistResults(res.data.searchResults.playlistRes);
    }
  };

  useEffect(() => {
    if (query.length > 1) makeSearchRequest();
  }, [query]);

  return (
    <div className="sm:pl-[16rem]">
      <SearchInputContainer setSearchParams={setSearchParams} query={query} />
      <section>
        {error && <p>An error has occurred: {error.message}</p>}
        {query.length < 2 ? (
          <ContainerGenres genresArr={!isLoading && data.data.genres} />
        ) : userResults.length > 0 ||
          songResults.length > 0 ||
          playlistResults.length > 0 ? (
          <ResultsOfSearch
            userResults={userResults}
            songResults={songResults}
            playlistResults={playlistResults}
          />
        ) : (
          <MessageNotFound query={query} />
        )}
      </section>
    </div>
  );
};

export default SearchResultsContainer;
