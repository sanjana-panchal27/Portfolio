import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCards from './ProjectCards';
import RUPlacementCell from '../../Assets/Projects/RUPlacementCell.png';

const Projects = () => {
  return (
    <>
      <div className="bg-slate-900 p-8 text-gray-200 font-sans">
        <div className="p-6 text-center">
          <div className=" text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-purple-500 to-pink-500">
            <h1 className="text-white text-4xl font-extrabold text-center mb-2">
              My Recent <strong className="text-blue-600">Works</strong>
            </h1>
            <div className="mt-1">
              <p className="text-white ">
                Here are few projects I've worked on.
              </p>
            </div>
          </div>

          <Row>
            <Col md={4}>
              <ProjectCards
                imgPath={RUPlacementCell}
                isBlog={false}
                title="RU Placement Cell"
                description="Placement Cell for Rai University, where Admin, Company and students can login, and get the real time updates about Placements. It is only for University oriented Placement Cell.
              "
                ghLink="https://github.com/sanjana-panchal27/MERN"
                demoLink="https://github.com/sanjana-panchal27/MERN"
              />
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default Projects;
