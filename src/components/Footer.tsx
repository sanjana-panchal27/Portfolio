import React from 'react';
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from 'react-icons/ai';

const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <>
      <div className="bg-blue-900 p-4">
        <div className="text-white flex items-center justify-center mb-2">
          <h3 className="text-xl">Designed and Developed by Sanjana Panchal</h3>
        </div>
        <div className="text-white flex items-center justify-center">
          <div className="">
            <h3>Copyright {year} SP</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
