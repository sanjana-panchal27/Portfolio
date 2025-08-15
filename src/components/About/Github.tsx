import React from 'react';
import GitHubCalendar from 'react-github-calendar';
import { Row } from 'reactstrap';

const Github = () => {
  return (
    <>
      <Row className="justify-center pb-1.5">
        <h1 className="pb-2.5">
          Days I <strong className="text-purple-800">Code</strong>
        </h1>

        <GitHubCalendar
          username="sanjana-panchal27"
          blockSize={15}
          blockMargin={5}
          colorScheme="light"
          fontSize={16}
        />
      </Row>
    </>
  );
};

export default Github;
