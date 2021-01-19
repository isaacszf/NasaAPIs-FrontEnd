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
  background: url(${solarSystemBackground}) no-repeat;

  animation: ${appearFromTop} 3s;

  footer {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 1024px) {
    display: none;
    visibility: 0;
  }
`;

export const PlanetContainer = styled.div`
  display: flex;

  background: #2d2c69;
  color: #bebdbf;

  margin-bottom: 16px;
  margin-left: 10px;

  width: 75%;

  border-radius: 16px;

  transition: all 200ms;

  &:hover {
    margin-left: 15px;
  }

  a {
    display: flex;

    img {
      margin-right: 20px;
      margin-left: 10px; 
      margin-bottom: 15px;
      margin-top: 15px;

      border-radius: 50%;
      border: 2px solid #2f2e82;

      width: 90px;
      height: 90px;
    }
  }

  div {
    display: flex;
    flex-direction: column;

    position: relative;
    top: 30px;
    
    p {
      margin-right: 40px;
      font-size: 17px;

      strong {
        margin-right: 5px;
      }
    }
  }
`;
