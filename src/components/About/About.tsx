import React from 'react';
import Particle from '../Particle';
import Github from './Github';
import Techstack from './Techstack';
import Toolstack from './Toolstack';
import AboutCard from './AboutCard';

const About = () => {
  return (
    <>
      <div className="about">
        <Particle />
        <div className="">
          <h1 className="flex justify-center text-2xl m-4">
            Know Who <span className="text-blue-600">I'M</span>
          </h1>
        </div>

        <AboutCard />
      </div>

      <Github />
      <Techstack />
      <Toolstack />
    </>
  );
};

export default About;
