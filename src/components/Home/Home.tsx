import React from 'react';
import Photo from '../../Assets/Photo.jpg';
import Type from './Type';

const Home = () => {
  return (
    <>
      <style>
        {`
        @keyframes wave-animation {
          0% { transform: rotate(0deg); }
          10% { transform: rotate(14deg); }
          20% { transform: rotate(-8deg); }
          30% { transform: rotate(14deg); }
          40% { transform: rotate(-4deg); }
          50% { transform: rotate(10deg); }
          60% { transform: rotate(0deg); }
          100% { transform: rotate(0deg); }
        }

        .animate-wave {
          animation-name: wave-animation;
          animation-duration: 2.1s;
          animation-iteration-count: infinite;
          display: inline-block;
        }
        `}
      </style>

      <div className=" bg-slate-900 h-screen flex items-center justify-center sm:p-8 lg:p-12 font-sans">
        <div className=" flex flex-col md:flex-row items-center justify-around w-full max-w-7xl mx-auto mb-16 md:mb-24 mt-8 md:mt-0">
          <div className="order-2 md:order-1 text-center md:text-left p-4 md:p-8 justify-center">
            <h1 className="bg-gradient-to-r from-blue-500 to-purple-950 text-transparent bg-clip-text text-4xl sm:text-3xl lg:text-4xl font-extrabold m-4">
              Hi There!{' '}
              <span
                className="text-white animate-wave"
                role="img"
                aria-labelledby="wave"
              >
                👋🏻
              </span>
            </h1>
            <h1 className="text-white text-5xl font-bold m-4 sm:text-3xl lg:text-4xl">
              I'M{' '}
              <span className="bg-gradient-to-r  from-blue-500 via-purple-500 to-pink-500  text-transparent bg-clip-text mb-4">
                SANJANA PANCHAL
              </span>
            </h1>

            <div className="bg-gradient-to-l from-blue-600 to-purple-700 text-transparent bg-clip-text text-4xl m-4">
              <div className="mt-8">
                <Type />
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2 p-4 md:p-8">
            <img
              src={Photo}
              alt="Profile Photo"
              className="h-100 w-100 object-contain rounded-full p-3  shadow-amber-200 shadow-md border-4 border-amber-100 sm:w-64 sm:h-64 md:w-90 md:h-90 lg:w-96 lg:h-96 shadow-lg transition-transform duration-300 transform hover:scale-105"
            />
          </div>
        </div>
      </div>

      <div className=" bg-slate-950 h-200 flex items-center justify-center sm:px-6 lg:px-8 w-full max-w-8xl mx-auto p-4 md:p-8">
        <div className="text-center">
          <div className="flex items-center justify-center p-4">
            <h1 className="bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text text-3xl font-bold">
              LET ME INTRODUCE MYSELF
            </h1>
          </div>

          <div className="p-4 m-5 w-200 flex text-start">
            <div className="flex-col items-center justify-center p-4 ">
              <p className="text-white text-xl mb-5">
                I like to Develop and Desgin in the web development.
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
                I am
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
                Feel Free to <span className="text-blue-600">Connect</span> with
                me
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
