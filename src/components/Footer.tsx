import React from 'react';
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import { NavLink } from 'react-router-dom'; // Using NavLink from react-router-dom instead of reactstrap

const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <div className="bg-blue-900 p-4 text-white">
      <div className="text-center md:text-left cursor-pointer mb-2">
        <NavLink to="/contact">Contact</NavLink>
      </div>

      <div className="flex flex-col lg:flex-row justify-between items-center text-center mt-4">
        <div className="flex flex-col lg:flex-row items-center space-y-2 lg:space-y-0 lg:space-x-4 my-2 lg:my-0">
          <h3 className="text-lg">Designed and Developed by Sanjana Panchal</h3>
          <div className="text-md">
            <h3>Copyright © {year} SP</h3>
          </div>
        </div>

        <div className="flex justify-center my-2 lg:my-0 lg:order-last">
          <ul className="flex gap-4">
            <li>
              <a
                className="text-white text-2xl"
                href="https://github.com/sanjana-panchal27"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>

            <li>
              <a
                className="text-white text-2xl"
                href="https://x.com/SanjanaPan58639"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter />
              </a>
            </li>

            <li>
              <a
                className="text-white text-2xl"
                href="https://www.linkedin.com/in/sanjana-panchal27/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>

            <li>
              <a
                className="text-white text-2xl"
                href="https://www.instagram.com/_sanjana731_?igsh=MXJzamwyenBlODExcA%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
