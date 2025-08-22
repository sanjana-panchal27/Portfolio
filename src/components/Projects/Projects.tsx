import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCards from './ProjectCards';
import RUPlacementCell from '../../Assets/Projects/RUPlacementCell.png';
import DocuHub from '../../Assets/Projects/DocuHub.png';

const Projects = () => {
  return (
    <>
      <div className="bg-slate-900 p-8 text-gray-200 font-sans">
        <div className="p-6 text-center">
          <div className=" text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-purple-500 to-pink-500">
            <h1 className="text-white text-4xl font-extrabold text-center mb-2">
              My Recent{' '}
              <strong className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-serif">
                Works
              </strong>
            </h1>
            <div className="mt-1">
              <p className="text-white ">
                Here are few Projects I've worked on.
              </p>
            </div>
          </div>

          <Row>
            <Col>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <ProjectCards
                  imgPath={RUPlacementCell}
                  isBlog={false}
                  title="RU Placement Cell"
                  description="Placement Cell for Rai University, where Admin, Companies and students can login, and get the real time updates about Placements. It is only for University oriented Placement Cell.
              "
                  ghLink="https://github.com/sanjana-panchal27/MERN"
                  demoLink="https://github.com/sanjana-panchal27/MERN"
                />

                <ProjectCards
                  imgPath={DocuHub}
                  isBlog={false}
                  title="DocuHub"
                  description="We developed a Birth & Death Registration portal for citizens of Banaskantha. As part of a team of eight, I participated in the SSIP Hackathon 2023 where we built this project at LD Engineering College."
                  ghLink="https://github.com/sanjana-panchal27/DocuHub"
                  demoLink="https://github.com/sanjana-panchal27/DocuHub"
                />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default Projects;
