import React, { useEffect, useState } from 'react';

import { Container } from './styles';

import Header from '../../components/Header';

import api from '../../services/api';

const APOD: React.FC = () => {
  return (
    <Container>
      <Header headerTitle="Astronomy Picture of the Day" />
    </Container>
  );
};

export default APOD;
