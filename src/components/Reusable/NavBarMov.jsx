import { AiFillHome } from "react-icons/ai";
import { BiLibrary, BiSearch } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

export const NavBarMov = ({ currentPage }) => {
  return (
    <nav className=" static  bottom-[8rem] p-3 w-full">
      <div className=" p-4 rounded-3xl w-full h-16 bg-newgray flex align-middle justify-around text-4xl">
        <Link to="/">
          <AiFillHome className={currentPage === "home" ? "text-teal" : ""} />
        </Link>
        <Link to="/profile"> 
        <FaUserCircle className={currentPage === "profile" ? "text-teal" : ""}/>
        </Link>
        <Link to="/search">
          <BiSearch
            className={currentPage === "search" ? "text-teal m-0.5" : "m-0.5"}
          />
        </Link>
        <Link to="/library">
          <BiLibrary className={currentPage === "library" ? "text-teal" : ""} />
        </Link>
      </div>
    </nav>
  );
};
