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
  background: url(${solarSystemBackground}) 21% no-repeat;

  height: 100vh;
  
  animation: ${appearFromTop} 1.5s;
`;

export const ImageSection = styled.section``;

export const InfoContainer = styled.div`
  display: inline-block;
  position: relative;

  p {
    color: #eee;
    margin-top: 20px;
    font-size: 20px;

    text-align: left;
  }

  img {
    width: 600px;
    height: 600px;   

    border-radius: 15px;

    outline: none;
  }
`;

export const ImagesContainer = styled.div`
  position: relative;

  top: 0%;
  left: 50%;
  transform: translate(-50%, 0%);

  max-width: 920px;
  max-height: 900px;
  
  text-align: center;
  border-radius: 15px;
`;

