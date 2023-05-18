import { AiFillHome } from 'react-icons/ai';
import { BiLibrary, BiSearch } from 'react-icons/bi';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const NavBarMov = ({ currentPage }) => {
  return (
    <nav className="fixed bottom-0 w-full bg-newblack z-30">
      <div className="w-full h-[3rem] flex items-center justify-around text-xl">
        <Link to="/">
          <AiFillHome className={currentPage === '/' ? 'text-teal' : ''} />
        </Link>
        <Link to="/profile">
          <FaUserCircle
            className={currentPage === '/profile' ? 'text-teal' : ''}
          />
        </Link>
        <Link to="/search">
          <BiSearch
            className={currentPage === '/search' ? 'text-teal m-0.5' : 'm-0.5'}
          />
        </Link>
        <Link to="/library">
          <BiLibrary
            className={currentPage === '/library' ? 'text-teal' : ''}
          />
        </Link>
      </div>
    </nav>
  );
};
