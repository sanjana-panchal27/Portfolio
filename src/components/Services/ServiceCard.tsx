import React from 'react';

const serviceCard = (props) => {
  return (
    <>
      <div className="shadow-lg bg-gray-900 p-6 border border-gray-700 h-full flex flex-col">
        <div className="div">
          <img />

          <div className="div">
            <h4>{props.title}</h4>
            <p>{props.description}</p>
          </div>

          <div className="div"></div>
        </div>
      </div>
    </>
  );
};

export default serviceCard;
