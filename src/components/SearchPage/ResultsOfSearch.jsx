import { useState } from 'react';
import { SongCard } from '../Reusable';
import { UserCard } from './UserCard';
import { TitleResults } from './TitleResults';
import { PlaylistResultsCard } from './PlaylistResultsCard';

export const ResultsOfSearch = ({
  userResults,
  songResults,
  playlistResults,
}) => {
  return (
    <div className="sm:px-10 pb-24">
      {playlistResults.length > 0 && (
        <section className="w-full pb-4">
          <TitleResults text="Playlists" />
          <div className="px-4 pt-2 h-[15rem] flex flex-row gap-4 flex-nowrap align-middle justify-start overflow-x-auto">
            {playlistResults.map((playlist) => (
              <PlaylistResultsCard key={playlist._id} playlist={playlist} />
            ))}
          </div>
        </section>
      )}
      {songResults.length > 0 && (
        <section className="w-full pb-4">
          <TitleResults text="Songs" />
          <div className="px-4 pt-2 h-[15rem] flex flex-row gap-4 flex-nowrap align-middle justify-start overflow-x-auto">
            {songResults.map((song) => (
              <SongCard key={song._id} song={song} />
            ))}
          </div>
        </section>
      )}
      {userResults.length > 0 && (
        <section className="w-full pb-4">
          <TitleResults text="Profiles" />
          <div className="px-4 pt-2 h-[15rem] flex flex-row gap-4 flex-nowrap align-middle justify-start overflow-x-auto">
            {userResults.map((user) => (
              <UserCard key={user._id} user={user} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};
