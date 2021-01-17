import React from 'react';
import { FaRocket } from 'react-icons/fa';

import { Container } from './styles';

import purpleBackgroundImage from '../../assets/images/purple-background.jpg';

interface CardProps {
  cardTitle: string;
  imageUrl?: string;
}

const Card: React.FC<CardProps> = ({ children, cardTitle, imageUrl }) => {
  return (
    <Container>
      <FaRocket size={24} />

      <h2>{cardTitle}</h2>

      <img src={imageUrl ? imageUrl : purpleBackgroundImage} alt="API" />

      <p>{children}</p>
    </Container>
  );
};

export default Card;
