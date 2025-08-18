import React from 'react';
import GitHubCalendar from 'react-github-calendar';
import { Row } from 'reactstrap';
import './Github.css';

const Github = () => {
  return (
    <>
      <Row className="justify-center">
        <h1 className="p-2 m-2">
          Days I <strong className="text-purple-800">Code</strong>
        </h1>

        <div className="text-blue-900 bg-blue-200 p-4 m-4 flex justify-center items-center">
          <GitHubCalendar
            username="sanjana-panchal27"
            blockSize={15}
            blockMargin={5}
            colorScheme="light"
            fontSize={16}
            blockRadius={5}
          />
        </div>
      </Row>
    </>
  );
};

export default Github;
