import styled, { keyframes } from 'styled-components';

import solarSystemBackground from '../../assets/images/solar-system-minimal-blue.jpg';

const appearFromTop = keyframes`
  from {
    opacity: 0;
    transform: translateY(-50px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  animation: ${appearFromTop} 3s;

  background: url(${solarSystemBackground}) no-repeat 56% !important;
`;
