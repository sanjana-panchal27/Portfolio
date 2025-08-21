import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // State for the navbar background transparency
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    //scroll event listener
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className="sticky top-0 z-50 w-full bg-gradient-to-r from-slate-800 to-blue-950 text-white shadow-lg {`fixed top-0 z-50 w-full transition-colors duration-300 ${
  isScrolled ? 'bg-blue-900 shadow-lg' : 'bg-transparent'
}`}"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-white">
              My Portfolio
            </Link>
          </div>

          <div className="hidden md:flex justify-around items-center space-x-8 ">
            <Link
              to="/"
              className="text-lg transition-all duration-300 p-1.5 rounded-xl hover:text-blue-950 hover:bg-slate-300 hover:scale-105"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-lg transition-all duration-300 p-1.5 rounded-xl hover:text-blue-950 hover:bg-slate-300 hover:scale-105"
            >
              About me
            </Link>
            <Link
              to="/projects"
              className="text-lg transition-all duration-300 p-1.5 rounded-xl hover:text-blue-950 hover:bg-slate-300 hover:scale-105"
            >
              Projects
            </Link>
            <Link
              to="/resume"
              className="text-lg transition-all duration-300 p-1.5 rounded-xl hover:text-blue-950 hover:bg-slate-300 hover:scale-105"
            >
              Resume
            </Link>
            <Link
              to="/services"
              className="text-lg transition-all duration-300 p-1.5 rounded-xl hover:text-blue-950 hover:bg-slate-300 hover:scale-105"
            >
              Services
            </Link>
            <Link
              to="/blog"
              className="text-lg transition-all duration-300 p-1.5 rounded-xl hover:text-blue-950 hover:bg-slate-300 hover:scale-105"
            >
              Blog
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none focus:ring-2 focus:ring-white"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden ${
          isOpen ? 'block' : 'hidden'
        } bg-blue-950 transition-all duration-300 ease-in-out`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-blue-300 transition-colors duration-300 w-full text-center"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-blue-300  transition-colors duration-300 w-full text-center"
          >
            About me
          </Link>
          <Link
            to="/projects"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-blue-300  transition-colors duration-300 w-full text-center"
          >
            Projects
          </Link>
          <Link
            to="/resume"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-blue-300  transition-colors duration-300 w-full text-center"
          >
            Resume
          </Link>
          <Link
            to="/services"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-blue-300  transition-colors duration-300 w-full text-center"
          >
            Services
          </Link>
          <Link
            to="/blog"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-blue-300  transition-colors duration-300 w-full text-center"
          >
            Blog
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
