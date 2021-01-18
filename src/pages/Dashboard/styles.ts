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

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(15px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const appearBackgroundImage = keyframes`
  from {
    opacity: 0.25;
  }

  to {
    opacity: 1;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  color: #eee;

  align-items: center;

  height: 100vh;

  background: url(${solarSystemBackground}) no-repeat 78%;

  animation: ${appearBackgroundImage} 1s;
  h1 {
    animation: ${appearFromTop} 1.4s;
    text-align: center;
    margin-top: 30px;

    font-size: 50px;
  }

  h3 {
    animation: ${appearFromTop} 1.4s;
    margin: 15px auto;
    text-align: center;
  }

  @media (max-width: 1024px) {
    background-size: 0;
  }
`;

export const Links = styled.div`
  display: flex;
  
  animation: ${appearFromLeft} 1.5s;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
`;
