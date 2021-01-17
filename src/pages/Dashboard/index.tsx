import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Links } from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <h1>Nasa APIs</h1>
      <h3>Select your API</h3>

      <Links>
        <Link to="/dscovr">DSCOVR API</Link>
      </Links>
    </Container>
  );
};

export default Dashboard;
