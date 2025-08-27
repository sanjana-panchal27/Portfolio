import React, { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import Particle from '../Particle';
import pdf from '../../Assets/CV_Aug.pdf';
import { AiOutlineDownload } from 'react-icons/ai';
import { Document, Page, pdfjs } from 'react-pdf';

const ResumeNew = () => {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div className="bg-slate-900 min-h-screen text-white p-8 font-sans flex justify-center">
      <Container>
        <Particle />

        <div className="flex justify-center">
          <a
            href={pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-colors duration-200 ease-in-out justify-center mt-8"
          >
            <AiOutlineDownload />
            Download CV
          </a>
        </div>

        <div className="img">
          <img src="" alt="CV" />
        </div>

        <Row className="justify-center">
          <Document file={pdf}>
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>
      </Container>
    </div>
  );
};

export default ResumeNew;
