import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { SiPostman, SiMacos } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

const Toolstack = () => {
  return (
    <>
      <div className="min-h-scree text-white p-8 font-sans flex justify-center">
        <div className="w-full max-w-5xl">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-6">
            <Col className="text-5xl p-8 flex flex-col items-center justify-center rounded-2xl border border-blue-700 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-blue-800">
              <VscVscode />
            </Col>

            <Col className="text-5xl p-8 flex flex-col items-center justify-center rounded-2xl border border-blue-700 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-blue-800">
              <SiMacos />
            </Col>

            <Col className="text-5xl p-8 flex flex-col items-center justify-center rounded-2xl border border-blue-700 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-blue-800">
              <SiPostman />
            </Col>
          </div>
        </div>
      </div>
    </>
  );
};

export default Toolstack;
