import { AiFillHome } from "react-icons/ai";
import { BiLibrary, BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";

export const NavBarMov = () => {
  return (
    <nav className="fixed bottom-3 p-3 w-full">
      <div className=" p-4 rounded-3xl w-full h-16 bg-newgray flex align-middle justify-around">
        <Link to="/">
          <AiFillHome className="text-3xl text-teal" />
        </Link>
        <Link to="/search">
          <BiSearch className="text-3xl" />
        </Link>
        <Link to="/likelibrary">
          <BiLibrary className="text-3xl" />
        </Link>
      </div>
    </nav>
  );
};
