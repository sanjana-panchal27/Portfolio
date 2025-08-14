import React from 'react';
import Photo from '../../Assets/Photo.jpg';
const Home = () => {
  return (
    <>
      <div className=" bg-slate-950 h-screen place-content-center">
        <img src={Photo} alt="Profile Photo" className="h-60 m-auto rounded-full shadow-amber-100" />
      </div>
    </>
  );
};

export default Home;
