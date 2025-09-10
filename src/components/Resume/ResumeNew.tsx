import React, { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import Particle from '../Particle';
import { AiOutlineDownload } from 'react-icons/ai';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

const ResumeNew = () => {
  const pdf = '/CV_Aug.pdf';

  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div className="bg-slate-900 min-h-screen text-white p-8 font-sans flex justify-center">
      <Container>
        <Particle />

        <div className="flex justify-center items-center min-h-screen">
          <a
            href={pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-colors duration-200 ease-in-out justify-center text-2xl"
          >
            <AiOutlineDownload />
            Download CV
          </a>
        </div>

        {/* <Document>
          <Page size="A4" style={styles.page}>
            <View style={styles.page}></View>
          </Page>
        </Document> */}

        {/* <div className="flex justify-center">
          <a
            href={pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-colors duration-200 ease-in-out justify-center mt-8"
          >
            <AiOutlineDownload />
            Download CV
          </a>
        </div> */}
      </Container>
    </div>
  );
};

export default ResumeNew;
