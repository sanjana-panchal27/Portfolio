import React from 'react';
import ServiceCard from './ServiceCard';
import { Col, Row } from 'react-bootstrap';

const services = (props) => {
  return (
    <>
      <div className="bg-slate-900 p-8 text-gray-200 font-sans">
        <div className="p-6 text-center">
          <div className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-purple-500 to-pink-500">
            <h1 className="text-4xl font-sans bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-seriftext-4xl font-extrabold text-center mb-2">
              Services
            </h1>

            <div className="mt-1">
              <p className="text-white ">Here are the Services I Provide.</p>
            </div>
          </div>

          <Row>
            <Col>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <ServiceCard />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default services;
