import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import { Container } from './styles';

interface HeaderProps {
  headerTitle: string;
}

const Header: React.FC<HeaderProps> = ({ headerTitle }) => {
  return (
    <Container>
      <h1>{headerTitle}</h1>

      <Link to="/">
        <FiArrowLeft size={24} />
      </Link>
    </Container>
  );
};

export default Header;
