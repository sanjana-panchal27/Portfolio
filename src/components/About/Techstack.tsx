import React from 'react';
import { Col } from 'react-bootstrap';
import { CgCPlusPlus } from 'react-icons/cg';
import {
  DiJavascript,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
} from 'react-icons/di';

const Techstack = () => {
  return (
    <>
      <div className="min-h-scree text-white p-8 font-sans flex justify-center">
        <div className="w-full max-w-5xl">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-6">
            <Col className="text-5xl p-8 flex flex-col items-center justify-center rounded-2xl border border-blue-700 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-blue-800">
              <CgCPlusPlus />
            </Col>

            <Col className="text-5xl p-8 flex flex-col items-center justify-center rounded-2xl border border-blue-700 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-blue-800">
              <DiJavascript />
            </Col>

            <Col className="text-5xl p-8 flex flex-col items-center justify-center rounded-2xl border border-blue-700 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-blue-800">
              <DiReact />
            </Col>

            <Col className="text-5xl p-8 flex flex-col items-center justify-center rounded-2xl border border-blue-700 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-blue-800">
              <DiNodejs />
            </Col>

            <Col className="text-5xl p-8 flex flex-col items-center justify-center rounded-2xl border border-blue-700 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-blue-800">
              <DiMongodb />
            </Col>

            <Col className="text-5xl p-8 flex flex-col items-center justify-center rounded-2xl border border-blue-700 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-blue-800">
              <DiGit />
            </Col>
          </div>
        </div>
      </div>
    </>
  );
};

export default Techstack;
