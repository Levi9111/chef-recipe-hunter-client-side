import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:justify-between md:items-center">
          <div className="flex justify-center md:order-2">
            <Link to="/" className="mx-3 text-gray-300 hover:text-white">
              <FaFacebookF size={20} />
            </Link>
            <Link to="/" className="mx-3 text-gray-300 hover:text-white">
              <FaTwitter size={20} />
            </Link>
            <Link to="/" className="mx-3 text-gray-300 hover:text-white">
              <FaInstagram size={20} />
            </Link>
          </div>
          <div className="mt-8 md:mt-0 md:order-1">
            <p className="text-center text-base font-medium">
              &copy; {new Date().getFullYear()} Eatery italiano. All rights
              reserved.
            </p>
          </div>
          <div className="flex justify-center md:order-3">
            <Link to="/" className="mx-3 text-gray-300 hover:text-white">
              Privacy Policy
            </Link>
            <Link to="/" className="mx-3 text-gray-300 hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
