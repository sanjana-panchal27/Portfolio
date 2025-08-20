import React from 'react';
import Particle from '../Particle';
import Github from './Github';
import Techstack from './Techstack';
import Toolstack from './Toolstack';
import AboutCard from './AboutCard';

const About = () => {
  return (
    <div className="bg-slate-900 p-8 text-gray-200">
      <Particle />
      <div className="p-6  rounded-3xl">
        <h1 className="text-4xl font-extrabold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-purple-500 to-pink-500">
          Know Who <span className="text-white">I'M</span>
        </h1>
        <AboutCard />
        <div className="mt-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">
            Professional <strong className="text-white">Skillset</strong>
          </h2>

          <div className="md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="">
              <Techstack />
            </div>
            <div className="">
              <Toolstack />
            </div>
            <div className="">
              <Github />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
