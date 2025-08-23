import React from 'react';
import Typewriter from 'typewriter-effect';

const Type = () => {
  return (
    <>
      <Typewriter
        options={{
          strings: [
            'MERN Stack developer',
            'Freelancer',
            'Open Source Contributor',
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
        }}
      />
    </>
  );
};

export default Type;
