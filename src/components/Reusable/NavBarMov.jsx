import { AiFillHome } from "react-icons/ai";
import { BiLibrary, BiSearch } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

export const NavBarMov = ({ currentPage }) => {
  return (
    <nav className="fixed bottom-0 p-2 w-full bg-newblack z-30">
      <div className="p-4 w-full h-16 flex align-middle justify-around text-4xl">
        <Link to="/">
          <AiFillHome className={currentPage === "/" ? "text-teal" : ""} />
        </Link>
        <Link to="/profile">
          <FaUserCircle />
        </Link>
        <Link to="/search">
          <BiSearch
            className={currentPage === "/search" ? "text-teal m-0.5" : "m-0.5"}
          />
        </Link>
        <Link to="/library">
          <BiLibrary
            className={currentPage === "/library" ? "text-teal" : ""}
          />
        </Link>
      </div>
    </nav>
  );
};
