import styled, { keyframes } from 'styled-components';

const appearGoToAPI = keyframes`
  0% {
    opacity: 0;
  } 
  50% {
    opacity: 0.5;
  } 
  100% {
    opacity: 1;
  }
`;

export const Container = styled.div`  
  display: flex;
  flex-direction: column;

  padding: 20px;
  padding-bottom: 60px;

  background: linear-gradient(to right, #1a1a66, #101052);
  border-radius: 15px;

  margin: 35px;

  transform: rotateZ(180deg);
  transition: transform 0.8s;
  transform-style: preserve-3d;

  &:hover {
    transform: rotateZ(0deg);

    p {
      animation: ${appearGoToAPI} 8s infinite;
    }
  }

  p {
    opacity: 0;
  }

  img {
    width: 250px;
    height: 150px;

    border-radius: 15px;
  }

  h2 {
    text-align: center;
    
    margin-bottom: 20px;
    margin-top: 15px;
  }
  
  a {
    text-decoration: none;

    display: flex;
    align-items: center;
    justify-content: center;

    margin-top: 35px;

    color: #eee;
    font-size: 18px;

    transition: color 1s;

    &:hover {
      color: #845f9c;
    }
  }

  svg {
    &.redirect-icon {
      margin-right: 15px;
    }
  } 
`;
