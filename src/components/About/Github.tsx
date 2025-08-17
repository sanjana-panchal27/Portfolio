// Github.tsx
import React from 'react';
import GithubCalendar from 'react-github-calendar';
import { Row } from 'reactstrap'; // Assuming you are using reactstrap

const Github = () => {
  return (
    <Row className="justify-content-center pb-5">
      <h1 className="pb-2">
        Days I <strong className="text-purple-800">Code</strong>
      </h1>
      <GithubCalendar
        username="sanjana-panchal27"
        blockSize={15}
        blockMargin={5}
        colorScheme="light"
        fontSize={16}
      />
    </Row>
  );
};

export default Github;
