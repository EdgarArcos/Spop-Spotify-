import { PlaylistCard } from "./PlaylistCard";

export const MainContainerLibrary = () => {
  return (
    <div className="pb-4 w-screen pt-10 sm:pl-[16rem]">
      <h2>Library</h2>
      <div>
        <PlaylistCard />
      </div>
    </div>
  );
};
