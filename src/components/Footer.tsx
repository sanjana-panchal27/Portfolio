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
      <h3>Designed and Developed by Sanjana Panchal</h3>
      <div className="div">
        <h3>Copyright {year} SP</h3>
      </div>
    </>
  );
};

export default Footer;
