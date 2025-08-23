import React from 'react';

const serviceCard = (props) => {
  return (
    <>
      <div className="mb-8">
        <div className="shadow-lg bg-gray-900 p-4 border border-gray-700 h-full flex flex-col rounded-2xl mt-6">
          <div className="">
            <img
              className="rounded-t-lg w-full mb-4 h-64 object-cover"
              src={props.imgPath}
              alt="services-img"
            />


            <div className="p-4 flex flex-col flex-1">
              <h4 className="text-white font-bold text-xl mb-4">
                {props.title}
              </h4>
              <p className="text-gray-400 text-justify text-sm mb-4">
                {props.description}
              </p>
            </div>

            <div className="flex justify-center">
              <div className="bg-blue-600 w-36 p-2 rounded hover:bg-blue-700 text-white font-bold py-2 px-4 shadow-lg transition-transform duration-300 hover:scale-105 text-center">
                More
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default serviceCard;
