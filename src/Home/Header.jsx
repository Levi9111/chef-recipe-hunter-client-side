import { useState } from "react";
import { Link } from "react-router-dom"; // assuming you're using React Router

function Header() {
  const [loggedIn, setLoggedIn] = useState(false); // replace with your own authentication state
  const userProfileUrl = "/user/profile"; // replace with the URL of the user's profile page

  return (
    <nav className="bg-gray-800">
      <div className="mx-auto px-4 py-2 max-w-7xl flex items-center justify-between">
        <Link to="/" className="text-white text-lg font-bold">
          Eatery italiano
        </Link>
        <div className="flex items-center">
          <Link to="/" className="mx-4 text-gray-300 hover:text-white">
            Home
          </Link>
          <Link to="/blog" className="mx-4 text-gray-300 hover:text-white">
            Blog
          </Link>
          {/* login functionality..... */}
          {loggedIn ? (
            <>
              <Link to={userProfileUrl}>
                <img
                  src="profile-pic.jpg"
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
              className="mx-4 bg-white text-gray-800 font-medium py-2 px-4 rounded"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Header;
