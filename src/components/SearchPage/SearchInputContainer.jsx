import { BiSearch } from 'react-icons/bi';

export const SearchInputContainer = ({ setSearchParams, query }) => {
  const handleSearch = ({ target }) => {
    const { value } = target;
    setSearchParams({ q: value });
  };

  return (
    <section className="flex flex-col w-full px-2 sm:pt-12 sm:pb-3 sm:px-10">
      <h2 className="text-3xl m-2 mt-8">Search</h2>
      <label className="flex relative align-middle justify-center mb-2 md:w-11/12 lg:w-9/12 xl:w-8/12 2xl:w-7/12">
        <BiSearch className="absolute top-5 left-5 text-2xl" />
        <input
          type="search"
          value={query}
          onChange={handleSearch}
          className="focus:shadow-md  focus:shadow-teal rounded-3xl bg-newgray text-lg w-full h-11 m-2 pl-11 pr-3"
        />
      </label>
    </section>
  );
};
