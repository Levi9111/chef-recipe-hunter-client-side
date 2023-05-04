import userProfileUrl from './../assets/7309667.png';
import { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import { AuthContext } from '../provider/AuthProvider';

function Header() {
  const { user, logOut } = useContext(AuthContext);

  const [loggedIn, setLoggedIn] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogOut = e => {
    e.preventDefault();
    logOut()
      .then()
      .catch(err => console.log(err));
  };

  return (
    <nav className="bg-gray-800">
      <div className="mx-auto px-4 py-2 max-w-7xl flex items-center justify-between">
        <Link to="/" className="text-white text-lg font-bold">
          Eatery italiano
        </Link>
        <div className="hidden md:flex items-center">
          {/* <Link to="/" className="mx-4 text-gray-300 hover:text-white">
            Home
          </Link> */}
          <NavLink
            to="/"
            aria-label="Home"
            title="Home"
            className={({ isActive }) => (isActive ? 'active' : 'default')}
          >
            Home
          </NavLink>

          <NavLink
            to="/blog"
            aria-label="Blog"
            title="Blog"
            className={({ isActive }) => (isActive ? 'active' : 'default')}
          >
            Blog
          </NavLink>
          {user ? (
            <>
              <Link to="">
                <img
                  src={userProfileUrl}
                  alt="User profile"
                  className="h-8 w-8 rounded-full"
                />
              </Link>
              <Link
                to=""
                onClick={handleLogOut}
                className="mx-4 bg-white text-gray-800 font-medium py-2 px-4 rounded"
              >
                Log Out
              </Link>
            </>
          ) : (
            <Link
              to="/login"
              className="mx-4 bg-white text-gray-800 font-medium py-2 px-4 rounded"
            >
              Login
            </Link>
          )}
        </div>
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="text-gray-300 hover:text-white focus:outline-none"
          >
            <FiMenu size={20} />
          </button>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-800 py-2">
          <div className="flex items-center justify-between px-4">
            <Link to="/" className="text-white text-lg font-bold">
              Eatery italiano
            </Link>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              <FiX size={20} />
            </button>
          </div>
          <div className="mt-4">
            <Link
              to="/"
              className="block mx-4 text-gray-300 hover:text-white py-2"
            >
              Home
            </Link>
            <Link
              to="/blog"
              className="block mx-4 text-gray-300 hover:text-white py-2"
            >
              Blog
            </Link>
            {loggedIn ? (
              <>
                <Link
                  to=""
                  className="block mx-4 text-gray-300 hover:text-white py-2"
                >
                  <img
                    src={userProfileUrl}
                    alt="User profile"
                    className="h-8 w-8 rounded-full"
                  />
                </Link>

                <Link
                  to="/logout"
                  className="mx-4 bg-white text-gray-800 font-medium py-2 px-4 rounded"
                >
                  Log Out
                </Link>
              </>
            ) : (
              <Link
                to="/login"
                className="block mx-4 bg-white text-gray-800 font-medium py-2 px-4 rounded"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Header;
