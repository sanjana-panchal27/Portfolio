import React from 'react';


const serviceCard = (props) => {
  return (
    <>
      <div className="shadow-lg bg-gray-900 p-6 border border-gray-700 h-full flex flex-col">
        <div className="div">
          <img
            className="rounded-t-lg w-full mb-4 h-64 object-cover"
            src={props.imgPath}
            alt="services-img"
          />

          <div className="p-4 flex flex-col flex-1">
            <h4 className="text-white font-bold text-xl mb-4">{props.title}</h4>
            <p className="text-gray-400 text-justify text-sm mb-4">
              {props.description}
            </p>
          </div>

          <div className="div">
            More
          </div>
        </div>
      </div>
    </>
  );
};

export default serviceCard;
