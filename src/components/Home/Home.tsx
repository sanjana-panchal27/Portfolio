import React from 'react';
import Photo from '../../Assets/Photo.jpg';
import Footer from '../Footer';

const Home = () => {
  return (
    <>
      <div className=" bg-slate-900 h-screen flex items-center justify-center sm:px-6 lg:px-8">
        <div className=" flex items-center justify-around w-full max-w-4xl">
          <div className="p-8">
            <h1 className="text-white text-4xl m-4 font-semibold mb-2 ">
              Hi There!
            </h1>
            <h1 className="text-white text-5xl font-bold m-4 ">
              I'M SANJANA PANCHAL
            </h1>
          </div>
          <div className="p-5">
            <img
              src={Photo}
              alt="Profile Photo"
              className="h-100 w-100 object-contain rounded-full p-3  shadow-amber-200 shadow-md border-4 border-amber-100 "
            />
          </div>
        </div>
      </div>

      <div className=" bg-slate-950 h-200 flex items-center justify-center sm:px-6 lg:px-8">
        <div className="m-5">
          <div className="flex items-center justify-center p-4">
            <h1 className="text-white text-3xl font-bold">
              LET ME INTRODUCE MYSELF
            </h1>
          </div>

          <div className="p-4 m-5 w-200">
            <div className="flex-col items-center justify-center p-4 ">
              <p className="text-white text-xl mb-5">
                I like to Design and Develop.
              </p>
              <p className="text-white text-xl mb-5">
                I am fluent in{' '}
                <span className="text-blue-500">C++, JavaScript.</span>
              </p>
              <p className="text-white text-xl mb-5">
                My Field of Interest's are building new Web Development and
                merge with AI.
              </p>
              <p className="text-white text-xl mb-5">
                I am Passionate
                <span className="text-blue-500">
                  {' '}
                  MERN stack developer,
                </span>{' '}
                and whenever possible I apply my passion for developing products
                with
                <span className="text-blue-500"> Node.js </span>
                and{' '}
                <span className="text-blue-500">
                  Modern JavaScript Library and Frameworks
                </span>{' '}
                like <span className="text-blue-500">React.js.</span>
              </p>
            </div>
          </div>

          <div className="text-2xl items-center justify-center m-6 p-6 mb-3.5">
            <div className="text-white ">
              <h1 className="mb-6">FIND ME ON</h1>
            </div>
            <div className="text-white">
              <p>
                Feel Free to <span>Connect with me</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
