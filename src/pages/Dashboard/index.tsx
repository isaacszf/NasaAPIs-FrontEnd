import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import { Container, Links } from './styles';

import Card from '../../components/Card';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <h1>Nasa APIs</h1>
      <h3>Select your API</h3>

      <Links>
        <Card cardTitle="DSCOVR API">
          <Link to="/dscovr">
            <FiLogIn className="redirect-icon" size={24} />
            Go to API
          </Link>
        </Card>

        <Card cardTitle="InSight Mars API">
          <Link to="/insightmars">
            <FiLogIn className="redirect-icon" size={24} />
            Go to API
          </Link>
        </Card>
      </Links>
    </Container>
  );
};

export default Dashboard;
