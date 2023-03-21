import { AiFillHome } from "react-icons/ai";
import { BiLibrary, BiSearch } from "react-icons/bi";

export const NavBarMov = () => {
  return (
    <nav className="fixed bottom-3 p-3 w-full">
      <div className=" p-4 rounded-3xl w-full h-16 bg-newgray flex align-middle justify-around">
        <AiFillHome className="text-3xl text-teal" />
        <BiSearch className="text-3xl" />
        <BiLibrary className="text-3xl" />
      </div>
    </nav>
  );
};
