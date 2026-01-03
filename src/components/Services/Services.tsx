import React from 'react';
import ServiceCard from './ServiceCard';
import webDev from '../../Assets/Services/webDev.png';
import { Col, Row } from 'react-bootstrap';

const services = () => {
  return (
    <>
      <div className="bg-slate-900 p-8 h-250 text-gray-200 font-sans">
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
                <ServiceCard
                  imgPath={webDev}
                  title="Web Development"
                  description="I offer comprehensive web development services, focusing on creating dynamic, responsive, and modern websites. My expertise spans the entire development lifecycle, from initial design and front-end implementation to robust back-end functionality. I specialize in building fast, secure, and scalable web applications that deliver a seamless user experience across all devices. Whether you need a simple portfolio site, a complex e-commerce platform, or a custom web application, I am dedicated to turning your vision into a reality with clean, efficient, and well-documented code."
                />
              </div>
            </Col>
          </Row>
        </div>
      </div>``
    </>
  );
};

export default services;
