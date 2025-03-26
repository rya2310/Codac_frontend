import React from 'react';
import { Link } from 'react-router-dom';
import { Code2, Menu } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-black/50 backdrop-blur-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Code2 className="h-8 w-8 text-blue-500" />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
              Codac
            </span>
          </Link>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Home
              </Link>
              <Link to="/editor" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Editor
              </Link>
              <Link to="/interview" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Interview
              </Link>
              <Link to="/chat" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Chat
              </Link>
              <Link to="/login" className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm font-medium">
                Login
              </Link>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Home
            </Link>
            <Link to="/editor" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Editor
            </Link>
            <Link to="/interview" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Interview
            </Link>
            <Link to="/chat" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Chat
            </Link>
            <Link to="/login" className="bg-blue-500 text-white block px-3 py-2 rounded-md text-base font-medium">
              Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;