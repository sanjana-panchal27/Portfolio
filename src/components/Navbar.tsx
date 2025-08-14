import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <header>
        <nav className='relative bg-gray-800/50 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10"'>
          <ul>
            <li>
              <Link to="" className=''>Home</Link>
              <Link to="">About me</Link>
              <Link to="">Projects</Link>
              <Link to="">Skills</Link>
              <Link to="">Services</Link>
              <Link to="">Blog</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
